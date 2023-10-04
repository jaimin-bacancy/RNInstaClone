# App Icon Script

## Step 1: Create app icon resource structure

- If you are using multiple environments then create folders according to your environments. For me, I have create two ;folders dev & prod.
  - Into this folder create another two folders android and ios. android folder includes android app icon & ios folder includes ios app icon.
- For generation of app icon I have used <https://easyappicon.com/>. If you will create your app icon with this website then you don't need to do anything for folder structure.

- Make sure your android & ios folder structure match below structure.

  - For android

  ```bash
      mipmap-xxxhdpi/
        ic_launcher_.png
      mipmap-xxhdpi/
        ic_launcher.png
      mipmap-xhdpi/
        ic_launcher.png
      mipmap-hdpi/
        ic_launcher.png
      mipmap-mdpi/
        ic_launcher.png
  ```

  - For iOS create one folder named AppIcon.appiconset.

  ```bash
      AppIcon.appiconset
        Contents.json
        Icon-App-20x20@1x.png
        Icon-App-20x20@2x.png
        Icon-App-20x20@3x.png
        Icon-App-29x29@1x.png
        Icon-App-29x29@2x.png
        Icon-App-29x29@3x.png
        Icon-App-40x40@1x.png
        Icon-App-40x40@2x.png
        Icon-App-40x40@3x.png
        Icon-App-60x60@1x.png
        Icon-App-60x60@2x.png
        Icon-App-76x76@1x.png
        Icon-App-76x76@2x.png
        Icon-App-83.5x83.5@2x.png
        ItunesArtwork@2x.png
  ```

## Step 2: Changes in appIcon.sh file

- Change destination_folder_path according to your project.

## Step 3: Run script

- First uninstall your app from device then go to terminal and navigate **scripts/appIcon** folder and run below command.

```bash
bash appIcon.sh
```
