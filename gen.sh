#!/usr/bin/env bash

wget https://github.com/protocolbuffers/protobuf/releases/download/v3.9.1/protoc-3.9.1-osx-x86_64.zip
cd target
rm -rf *
mv ../protoc-3.9.1-osx-x86_64.zip .
unzip protoc-3.9.1-osx-x86_64.zip
cd ..
target/bin/protoc --python_out=python/models/ employee.proto
target/bin/protoc --js_out=import_style=commonjs,binary:javascript/models/ employee.proto