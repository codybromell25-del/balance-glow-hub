#!/usr/bin/env python3
"""Render the balance studios "quick-buy bar" report as a brand-styled PDF.

Usage:
    python3 scripts/reports/quick_buy_report.py \
        --data scripts/reports/quick_buy_data.json \
        --out /tmp/balance-quick-buy-report.pdf

The JSON holds every number and line of copy; the layout lives here.
Re-running with a refreshed JSON (same shape) produces the same report for
a new window.
"""

import argparse
import json
import os
import tempfile
from datetime import datetime

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.pdfgen import canvas

# ---------------------------------------------------------------- brand
CREAM = "#FAF3ED"
INK = "#1A1A1A"
GREY = "#5A5A55"
SAGE = "#A3C1AD"
MOSS = "#517963"
SAND = "#D6BCA1"
SLATE = "#839F92"
PALE = "#CBC8C1"
WHITE = "#FFFFFF"

FONT_DIR = "/usr/share/fonts/truetype/dejavu"
SERIF = "BalanceSerif"
SERIF_B = "BalanceSerifBold"
SERIF_I = "BalanceSerifItalic"
SANS = "BalanceSans"
SANS_B = "BalanceSansBold"


def register_fonts():
    pairs = [
        (SERIF, "DejaVuSerif.ttf"),
        (SERIF_B, "DejaVuSerif-Bold.ttf"),
        (SERIF_I, "DejaVuSerif-Italic.ttf"),
        (SANS, "DejaVuSans.ttf"),
        (SANS_B, "DejaVuSans-Bold.ttf"),
    ]
    for name, fn in pairs:
        path = os.path.join(FONT_DIR, fn)
        if os.path.exists(path):
            pdfmetrics.registerFont(TTFont(name, path))
    for name, fn in [
        ("DejaVu Serif", "DejaVuSerif.ttf"),
        ("DejaVu Sans", "DejaVuSans.ttf"),
    ]:
        p = os.path.join(FONT_DIR, fn)
        if os.path.exists(p):
            font_manager.fontManager.addfont(p)
    plt.rcParams.update({
        "font.family": "DejaVu Sans",
        "axes.edgecolor": INK,
        "axes.linewidth": 0.7,
        "text.color": INK,
        "axes.labelcolor": INK,
        "xtick.color": INK,
        "ytick.color": INK,
    })


# ---------------------------------------------------------------- helpers
def page_bg(c, w, h):
    c.setFillColor(HexColor(CREAM))
    c.rect(0, 0, w, h, stroke=0, fill=1)


def header(c, w, h, data, sub_extra=""):
    c.setFont(SERIF_B, 26)
    c.setFillColor(HexColor(INK))
    c.drawString(18 * mm, h - 22 * mm, "balance")
    title_w = c.stringWidth("balance", SERIF_B, 26)
    c.setFont(SERIF_I, 26)
    c.drawString(18 * mm + title_w + 3 * mm, h - 22 * mm, data["report"] + " report")
    meta = f'{data["site"]}  ·  {data["windowLabel"]}  ·  generated {data["generated"]}'
    if sub_extra:
        meta += sub_extra
    c.setFont(SANS, 7.6)
    c.setFillColor(HexColor(GREY))
    c.drawString(18 * mm, h - 27.5 * mm, meta)
    c.setStrokeColor(HexColor(SAGE))
    c.setLineWidth(0.8)
    c.line(18 * mm, h - 31 * mm, w - 18 * mm, h - 31 * mm)


def footer(c, w, h, page_no):
    c.setFont(SANS, 7)
    c.setFillColor(HexColor(GREY))
    c.drawRightString(w - 18 * mm, 12 * mm, f'{data_footer["footer"]}  ·  page {page_no}')


def kpi_box(c, w, y, kpis):
    left, right = 18 * mm, w - 18 * mm
    box_h = 24 * mm
    c.setFillColor(HexColor(WHITE))
    c.setStrokeColor(HexColor(SAGE))
    c.setLineWidth(0.9)
    c.rect(left, y - box_h, right - left, box_h, stroke=1, fill=1)
    n = len(kpis)
    slot = (right - left) / n
    for i, k in enumerate(kpis):
        cx = left + slot * (i + 0.5)
        c.setFont(SERIF_B, 19)
        c.setFillColor(HexColor(INK))
        c.drawCentredString(cx, y - 12.5 * mm, k["value"])
        c.setFont(SANS, 7.2)
        c.setFillColor(HexColor(GREY))
        c.drawCentredString(cx, y - 19 * mm, k["label"])
        if i:
            c.setStrokeColor(HexColor("#E4DCD2"))
            c.setLineWidth(0.6)
            c.line(left + slot * i, y - box_h + 4 * mm, left + slot * i, y - 4 * mm)
    return y - box_h


def section(c, w, y, text, size=13):
    c.setFont(SERIF_I, size)
    c.setFillColor(HexColor(INK))
    c.drawString(18 * mm, y, text)
    return y - 7 * mm


def prose(c, w, y, text, style):
    p = Paragraph(text, style)
    tw, th = p.wrap(w - 36 * mm, 200)
    p.drawOn(c, 18 * mm, y - th)
    return y - th


def chart_daily(daily, path):
    fig, ax = plt.subplots(figsize=(7.1, 2.5), dpi=220)
    fig.patch.set_facecolor(CREAM)
    ax.set_facecolor(CREAM)
    labels = [datetime.strptime(d["date"], "%Y-%m-%d").strftime("%d %b") for d in daily]
    visits = [d["visits"] for d in daily]
    views = [d["pageviews"] for d in daily]
    x = range(len(daily))
    ax.plot(x, views, color=SAGE, lw=1.4, marker="o", ms=3.4, label="page views")
    ax.plot(x, visits, color=MOSS, lw=1.6, marker="o", ms=4, label="visits")
    for i, v in enumerate(visits):
        ax.annotate(f"{v:,}", (i, v), textcoords="offset points", xytext=(0, 6),
                    ha="center", fontsize=6.2, color=INK)
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, fontsize=6.6)
    ax.tick_params(axis="y", labelsize=6.4, length=2.5)
    ax.tick_params(axis="x", length=0)
    ax.set_ylim(0, max(views) * 1.22)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["left"].set_color("#B9B2A8")
    ax.spines["bottom"].set_color("#B9B2A8")
    leg = ax.legend(frameon=False, fontsize=6.6, ncol=2, loc="upper right",
                    handlelength=1.6, columnspacing=1.2, borderpad=0)
    for t in leg.get_texts():
        t.set_color(INK)
    fig.tight_layout(pad=0.4)
    fig.savefig(path, facecolor=CREAM)
    plt.close(fig)


def chart_bars(rows, path, colors, figsize=(7.1, 2.15)):
    fig, ax = plt.subplots(figsize=figsize, dpi=220)
    fig.patch.set_facecolor(CREAM)
    ax.set_facecolor(CREAM)
    labels = [r["label"] for r in rows]
    vals = [r["value"] for r in rows]
    y = range(len(rows))[::-1]
    ax.barh(list(y), vals, color=colors[: len(rows)], height=0.62)
    top = max(vals)
    for yi, v in zip(y, vals):
        ax.annotate(f"{v:,}", (v, yi), textcoords="offset points", xytext=(4, -2.4),
                    fontsize=6.6, color=INK)
    ax.set_yticks(list(y))
    ax.set_yticklabels(labels, fontsize=6.9)
    ax.set_xlim(0, top * 1.16)
    ax.tick_params(axis="x", labelsize=6.2, length=2.5)
    ax.tick_params(axis="y", length=0)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.spines["left"].set_visible(False)
    ax.spines["bottom"].set_color("#B9B2A8")
    fig.tight_layout(pad=0.4)
    fig.savefig(path, facecolor=CREAM)
    plt.close(fig)


# ---------------------------------------------------------------- report
def build(data, out):
    global data_footer
    data_footer = data
    register_fonts()

    w, h = 595.27, 841.89  # A4 portrait
    c = canvas.Canvas(out, pagesize=(w, h))
    c.setTitle(f'balance studios {data["report"]} report')
    tmp = tempfile.mkdtemp(prefix="balance-report-")

    body = ParagraphStyle("body", fontName=SANS, fontSize=8.6, leading=12.4, textColor=HexColor(INK))
    small = ParagraphStyle("small", fontName=SANS, fontSize=7.8, leading=11.2, textColor=HexColor(GREY))
    cell = ParagraphStyle("cell", fontName=SANS, fontSize=7.8, leading=10.6, textColor=HexColor(INK))
    cell_head = ParagraphStyle("cellh", fontName=SANS_B, fontSize=7.8, leading=10.6, textColor=HexColor(INK))
    bullet = ParagraphStyle("bullet", fontName=SANS, fontSize=8.6, leading=12.4,
                            textColor=HexColor(INK), leftIndent=5.6 * mm)

    # ------------------------------------------------------------- page 1
    page_bg(c, w, h)
    header(c, w, h, data)
    y = h - 38 * mm
    y = kpi_box(c, w, y, data["kpis"])

    y = section(c, w, y - 9 * mm, "Every visit now sees the bar")
    y = prose(c, w, y, (
        "The quick-buy bar sits at the bottom of every page, on phones and computers, "
        "with three tabs - Memberships, Classes and New here - and a single Buy now button "
        "that opens the matching Momence checkout. It went live across the site on 1 November, "
        "so this edition is the starting line rather than a verdict: it records where traffic "
        "and checkouts stood when the bar took over, and what has to be switched on before "
        "we can say whether it earns its place."
    ), body)

    y = section(c, w, y - 7 * mm, "Visits each day")
    p1 = os.path.join(tmp, "daily.png")
    chart_daily(data["daily"], p1)
    img_h = 62 * mm
    c.drawImage(p1, 16 * mm, y - img_h, width=w - 32 * mm, height=img_h,
                preserveAspectRatio=False, mask=None)
    y = y - img_h

    y = section(c, w, y - 9 * mm, "Where the visits came from")
    p2 = os.path.join(tmp, "sources.png")
    chart_bars(data["sources"], p2, [MOSS, SAGE, SAND, SLATE, PALE])
    img_h = 56 * mm
    c.drawImage(p2, 16 * mm, y - img_h, width=w - 32 * mm, height=img_h,
                preserveAspectRatio=False, mask=None)
    y = y - img_h

    y = prose(c, w, y - 5 * mm, (
        "Paid campaigns were almost completely off in this window, so this is the site's "
        "ordinary shape: mostly people arriving with no link at all, then Google, then "
        "customers coming back from Momence, then Instagram."
    ), small)
    footer(c, w, h, 1)
    c.showPage()

    # ------------------------------------------------------------- page 2
    page_bg(c, w, h)
    header(c, w, h, data)
    y = h - 38 * mm
    y = section(c, w, y, "The loop the site can already show")
    top = y
    row_h = 10 * mm
    for i, step in enumerate(data["funnel"]):
        bot = top - (i + 1) * row_h + 1.6 * mm
        c.setFillColor(HexColor(WHITE))
        c.setStrokeColor(HexColor("#E4DCD2"))
        c.setLineWidth(0.7)
        c.rect(18 * mm, bot, w - 36 * mm, row_h - 1.6 * mm, stroke=1, fill=1)
        c.setFont(SERIF_B, 15)
        c.setFillColor(HexColor(MOSS))
        c.drawString(23 * mm, bot + 3.4 * mm, step["value"])
        c.setFont(SANS_B, 8.4)
        c.setFillColor(HexColor(INK))
        c.drawString(52 * mm, bot + 4.9 * mm, step["label"])
        c.setFont(SANS, 7.4)
        c.setFillColor(HexColor(GREY))
        c.drawString(52 * mm, bot + 1.9 * mm, step["note"])
    y = top - len(data["funnel"]) * row_h - 6.5 * mm

    y = section(c, w, y, "What we can and can't yet prove")
    cols = [78 * mm, 62 * mm, 42 * mm]
    x0 = 18 * mm
    # header row
    heads = ["What we want to know", "Where the answer comes from", "Status"]
    c.setFillColor(HexColor("#F2E8DD"))
    c.rect(x0, y - 7 * mm, sum(cols), 7 * mm, stroke=0, fill=1)
    cx = x0
    for hh, cw in zip(heads, cols):
        c.setFont(SANS_B, 7.6)
        c.setFillColor(HexColor(INK))
        c.drawString(cx + 2.5 * mm, y - 4.8 * mm, hh)
        cx += cw
    y -= 7 * mm
    for i, m in enumerate(data["measures"]):
        texts = [m["question"], m["where"], m["status"]]
        paras = [Paragraph(t, cell) for t in texts]
        height = max(p.wrap(cw - 5 * mm, 100)[1] for p, cw in zip(paras, cols)) + 3.2 * mm
        if i % 2 == 0:
            c.setFillColor(HexColor(WHITE))
            c.rect(x0, y - height, sum(cols), height, stroke=0, fill=1)
        c.setStrokeColor(HexColor("#E4DCD2"))
        c.setLineWidth(0.6)
        c.line(x0, y - height, x0 + sum(cols), y - height)
        cx = x0
        for p, cw in zip(paras, cols):
            tw, th = p.wrap(cw - 5 * mm, 100)
            p.drawOn(c, cx + 2.5 * mm, y - height + 1.6 * mm)
            cx += cw
        y -= height
    y -= 2 * mm
    y = prose(c, w, y, (
        "Tap counts for the bar are read in the Clarity dashboard (Filters, then Smart events): "
        "Clarity's export API does not return custom events, so they cannot be pulled into this "
        "report automatically. A small first-party counter could be added if you want them in the "
        "PDF - that is a new collection of visitor data and needs your go-ahead."
    ), small)

    y = section(c, w, y - 6 * mm, "Pages with the most visits")
    p3 = os.path.join(tmp, "pages.png")
    chart_bars(data["pages"], p3, [MOSS, SAGE, SAND, SLATE, PALE, "#B9A88F"], figsize=(7.1, 1.75))
    img_h = 42 * mm
    c.drawImage(p3, 16 * mm, y - img_h, width=w - 32 * mm, height=img_h,
                preserveAspectRatio=False, mask=None)
    y = y - img_h

    y = section(c, w, y - 5 * mm, "Watch list")
    for item in data["watch"]:
        c.setFont(SANS, 4.6)
        c.setFillColor(HexColor(MOSS))
        c.drawString(19 * mm, y - 2.6 * mm, "●")
        y = prose(c, w, y, item, bullet)
        y -= 1.6 * mm

    y = section(c, w, y - 4 * mm, "How to re-run this report")
    y = prose(c, w, y, (
        "Ask for the <font face='" + SANS_B + "'>quick-buy bar report</font> with a date window. "
        "It pulls website stats for that window, the last three days of Clarity, and the current "
        "Momence order counts, refreshes "
        "<font face='" + SANS_B + "'>scripts/reports/quick_buy_data.json</font>, "
        "then renders this file again with "
        "<font face='" + SANS_B + "'>quick_buy_report.py</font>."
    ), body)

    if y < 18 * mm:
        raise SystemExit(f"page 2 overflows: only {(y / mm):.1f} mm left above the footer")
    footer(c, w, h, 2)
    c.showPage()
    c.save()
    return out


if __name__ == "__main__":
    here = os.path.dirname(os.path.abspath(__file__))
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", default=os.path.join(here, "quick_buy_data.json"))
    ap.add_argument("--out", default="/tmp/balance-quick-buy-report.pdf")
    args = ap.parse_args()
    with open(args.data, encoding="utf-8") as f:
        payload = json.load(f)
    print(build(payload, args.out))
