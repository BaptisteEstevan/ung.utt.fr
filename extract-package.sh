#!/bin/bash

# Extract the `package.tgz` file (containing the `_site` folder) inside the
# right directory (in our case, `public_html`). Keep a copy of the old one.

cd `dirname $0`

# Extract the package
tar -xzf package.tgz
rm package.tgz

mv public_html public_html_old
mv _site public_html
