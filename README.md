# BOOKSTORE-4

Team-4 :\
BOOKSTORE APPLICATION USING REACT NATIVE\
\
\
TEAM MEMBERS:\
      Vidya Shree G\
      N.S.S.Preetham\
      Deepak R\
      Adarsh Kumar\
\
\
INSTRUCTIONS:

1.Create a new folder named 'BookStore' in workspace by running this command.

$> react-native init BookStore

2. Replace the files package.json and app.js in BookStore with the one in BookStore-4
3. Move components,services folders from BookStore-4 to BookStore
4. Add the following lines in BookStore/ios/BookStore/info.plist at the end,

<key>UIAppFonts</key>
    <array>
      <string>AntDesign.ttf</string>
      <string>Entypo.ttf</string>
      <string>EvilIcons.ttf</string>
      <string>Feather.ttf</string>
      <string>FontAwesome.ttf</string>
      <string>FontAwesome5_Brands.ttf</string>
      <string>FontAwesome5_Regular.ttf</string>
      <string>FontAwesome5_Solid.ttf</string>
      <string>Fontisto.ttf</string>
      <string>Foundation.ttf</string>
      <string>Ionicons.ttf</string>
      <string>MaterialIcons.ttf</string>
      <string>MaterialCommunityIcons.ttf</string>
      <string>SimpleLineIcons.ttf</string>
      <string>Octicons.ttf</string>
      <string>Zocial.ttf</string>
    </array>


5. In terminal, run the following commands
$> cd BookStore
$> yarn install
$> cd ios
$> pod install
$> cd ..
$> react-native run-ios







