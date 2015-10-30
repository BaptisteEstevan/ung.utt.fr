#!/bin/bash
cd `dirname $0`

# Extract the package
tar -xzf package.tgz
rm package.tgz

mv public_html public_html_old
mv _site public_html
