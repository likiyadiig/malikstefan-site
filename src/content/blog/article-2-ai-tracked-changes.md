---
title: Edit a Word Document With AI and Keep Tracked Changes
description: Why pasting a report into an AI chat loses your tracked changes, what to check before trusting any tool, and the options that keep every edit visible.
slug: edit-word-document-ai-tracked-changes
date: 2026-10-24
---

## Why a chat loses your tracked changes

When my mom used Claude to make a report sound like one voice, she pasted the text into a chat and got clean text back. Sometimes it was good. Sometimes a sentence meant something slightly different, and each try gave a different result, so she kept asking again.

But even a good answer had a problem. A chat only deals in text. It doesn't know about your Word file, so it can't give you back crossed-out and underlined words, only a new version. To see what changed, you have to put the old and new text side by side and compare them yourself.

For a short email that's fine. My mom's reports are usually around 100 pages. For a document that size, going to a quality reviewer, it means either trusting every edit blindly or rereading everything twice.

## What "real tracked changes" means

A Word file is really a zip folder full of text files that describe the document. Tracked changes are special markers inside those files: one says "this text was deleted", another says "this text was inserted", along with who made the change and when. That's what Word reads when it shows you crossed-out and underlined words.

So a tool that gives you real tracked changes has to work on the Word file itself, not just the text. Mine does it like this. Claude never sees the file. The app pulls the paragraphs out, sends them to Claude, and gets back a list of small edits: in this paragraph, replace these exact words with these, and here's why. The app then writes Word's own markers into your file around only the words that changed, and keeps the original formatting.

When an edit would touch something risky, like a bold word, a footnote or an automatic field, the app leaves it out instead of risking a broken file. You lose an edit. You don't lose your document.

## What to check before you trust any tool

Whichever tool you try, mine included, test it on a report you know well and look for four things.

First, do you get your own file back? Not a new document with your text pasted in, but the same file with the same styles, headers and comments.

Second, are only the changed words marked? If a whole paragraph is crossed out and rewritten because one word changed, reviewing it is almost as slow as comparing two versions.

Third, does it tell you which edits are risky? In an evaluation report, the dangerous edits are small. A number changes. "May have contributed" becomes "contributed". A "not" disappears. A "due to" appears where the author never claimed a cause. My app checks for exactly those things: numbers, words like may and suggests, negations, cause words and changed quotes. Any edit that trips one gets a comment, whatever the AI thought of it. In the sample report, that's how "can be attributed to" turning into "is due to" got flagged.

Fourth, what does it skip? A good tool tells you what it left alone. A bad one changes everything and hopes.

## The other options

I haven't used the other tools myself, so here's only what their makers say.

Microsoft's own Copilot in Word can now edit with tracked changes, if you turn Track Changes on first. According to Microsoft's help page, it can't add comments yet, and it can delete a comment if it rewrites the paragraph the comment sits on. You need a Microsoft 365 plan that includes Copilot. If your organisation already pays for that, it's the obvious place to start, because it works inside Word and you don't upload anything.

There are also add-ins and web tools that promise native tracked changes. Search for them and test them the way I described above, on a report you know well.

Report Harmonizer is the one I built. It costs 15 euros a month, works on uploaded Word files, and flags risky edits with comments. Its weak spot is consistency across a long report: it sends the report in parts, and each part is edited without seeing the edits made to the others. On a 100 page report, read the first and last sections side by side before you trust the voice.

## Where to go from here

If your real problem is a report written by several people, I wrote about that separately: how to spot where one author stops and the next begins, and how to pick one voice before you edit. [Make a Multi-Author Report Sound Like One Voice](/blog/multi-author-report-one-voice)

If you want to see what tracked changes from an AI look like before deciding anything, you can download a made-up sample report from [Report Harmonizer](https://app.malikstefan.com), before and after, without signing up.
