# Unexpected Case-Insensitive Regex Behavior in MongoDB

This repository demonstrates a potential issue with case-insensitive regular expression searches in MongoDB when dealing with Unicode characters or varied character encodings.  The problem manifests as inconsistencies in search results across different environments.  The solution explores alternative approaches for robust case-insensitive searches.

## Bug Description
The provided JavaScript code uses a case-insensitive regular expression to query a MongoDB collection. However, this may produce unexpected results due to variations in how regex engines handle Unicode characters and different character sets depending on the MongoDB version and operating system.

## Solution
The solution involves using collation options within the query to explicitly define the character set, strength, and case sensitivity. This ensures consistent and accurate results across diverse character sets. This helps to resolve inconsistencies when searching for case-insensitive strings containing Unicode or characters with varied character encodings.