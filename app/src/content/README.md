# Contributing

You can raise an issue in Github, or just email me (1on1s@jtheory.com), or raise a little PR.

If you have significant additions to make to this guide, let me know before raising a huge PR changing everything:
- 1on1s@jtheory.com
- or PM me if you know me in an online community

But I'll happily give you credit!

This is brand new, and I don't know if there's interest; but if people want to collaborate and make this into something great, I'll put it on a proper domain name, and make sure contributors are named & linked.

# Editing and adding new topics

If the category already exists:

Edit the markdown files in the `cats` directory, or add a new markdown file.

If you're familiar with GitHub, you can raise a pull request (in your own repo); and once that's merged, the fresh topic will be live immediately.

Make sure each topic file has a top-level heading (starting with `#`); that's the title that will show in the app.

# Renaming or adding new categories

This is a little harder: see `cat-titles-and-slugs.ts`: this maps the category titles to the directory names you'll see in the `cats` folder.

Deployment stops if this file doesn't match up with the directory names.
