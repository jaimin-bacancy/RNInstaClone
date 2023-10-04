#!/bin/bash

# Get the source and destination folder paths
dev_android_source_folder_path="./dev/android" # Path of your app icon resources folder.
dev_android_destination_folder_path="../../android/app/src/development/res"

dev_ios_source_folder_path="./dev/ios/AppIcon.appiconset" # Path of your app icon resources folder.
dev_ios_destination_folder_path="../../ios/RNTSBoilerplate/Images.xcassets/AppIconDev.appiconset"

prod_android_source_folder_path="./prod/android" # Path of your app icon resources folder.
prod_android_destination_folder_path="../../android/app/src/main/res"

prod_ios_source_folder_path="./prod/ios/AppIcon.appiconset" # Path of your app icon resources folder.
prod_ios_destination_folder_path="../../ios/RNTSBoilerplate/Images.xcassets/AppIcon.appiconset"

# Copy the source folder and its contents to the destination folder
# For dev env.
cp -R "$dev_android_source_folder_path"/* "$dev_android_destination_folder_path"
cp -R "$dev_ios_source_folder_path"/* "$dev_ios_destination_folder_path"

# For prod env.
cp -R "$prod_android_source_folder_path"/* "$prod_android_destination_folder_path"
cp -R "$prod_ios_source_folder_path"/* "$prod_ios_destination_folder_path"