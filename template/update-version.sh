#!/usr/bin/env bash -e

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
PACKAGE_VERSION_CODE=$(cat package.json | grep versionCode | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

## iOS
PROJECT_IOS_DIR="ios/ProjectName"
INFOPLIST_FILE="Info.plist"
INFOPLIST_DIR="${PROJECT_IOS_DIR}/${INFOPLIST_FILE}"

# Update plist with new values
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${PACKAGE_VERSION}" "${INFOPLIST_DIR}"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${PACKAGE_VERSION_CODE}" "${INFOPLIST_DIR}"

## Android
BUILD_GRADLE="android/app/build.gradle"

sed -i '' "s/versionName \"[0-9.a-zA-Z]*\"$/versionName \"${PACKAGE_VERSION}\"/g" "${BUILD_GRADLE}"
sed -i '' "s/versionCode [0-9]*$/versionCode ${PACKAGE_VERSION_CODE}/g" "${BUILD_GRADLE}"