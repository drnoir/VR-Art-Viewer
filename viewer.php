<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>AR Viewer</title>
    <meta name="description" content="AR Viewer Test • A-Frame">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script src="bundle.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vanilla-picker@2"></script>
  </head>   
  <body>
    <a-scene>
          <!-- UI  -->
          <div id="main-ui">  
                <h2>Details</h2> 
                <hr>     
                <h2>Design Name: Mama Shark</h2>
                  <!-- <form action="upload.php" method="post" enctype="multipart/form-data">
                  <h2>Upload a wall texture:</h2>
                    <input type="file" name="fileToUpload" id="fileToUpload">
                    <input type="submit" value="Upload Image" name="submit">
                        </form> -->

         <!-- populate select drop down with image dir                -->
        <select name="selectimg" class = "selectdesign">
        <option value="" selected="selected">Select Design</option>
            <?php 
                foreach(glob(dirname(__FILE__) . '/uploads/*') as $filename){
                $filename = basename($filename);
                echo "<option value='" . $filename . "'>".$filename."</option>";
                }
            ?>
        </select> 

              <h2>Choose a Wallpaper Colour</h2>
              <div id="parent">Open Color Picker</div>

              <h2>Select Wallpaper</h2>
              <select class = 'wall-texture'>
                  <option value="white-brick">Whihte Brick</option>
                  <option value="modern-black">Modern Black Wallapaper</option>
                  <option value="brown-wallpaper" >Brown Wallpaper</option>
                </select>

                
                <h2>Size</h2>
                  <select class = 'design-size'>
                      <!-- <option value="large">Large</option>
                      <option value="medium">Medium</option>
                      <option value="small" >Small</option> -->
                      <option value="10x8">10 x 8 (Landscape)</option>
                      <option value="12x10">12 x 10 (Landscape)</option>
                      <option value="14x11">14 x 11 (Landscape)</option>
                      <option value="16x12">16 x 12 (Landscape)</option>
                      <option value="20x16">20 x 16 (Landscape)</option>
                      <option value="24x20">24 x 20 (Landscape)</option>
                      <option value="30x20">30 x 20 (Landscape)</option>
                      <option value="40x30">40 x 30 (Landscape)</option>
                      <option value="8x10">8x10 (Portrait)</option>
                      <option value="10x12">12 x 10 (Portrait)</option>
                      <option value="11x14">11x 14 (Portrait)</option>
                      <option value="12x16">12 x 16 (Portrait)</option>
                      <option value="16x20">16 x 20 (Portrait)</option>
                      <option value="20x24">20 x 24 (Portrait)</option>
                      <option value="20x30">20 x 30 (Portrait)</option>
                      <option value="30x40">30 x 40 (Portrait)</option>
                  </select>
                <h2>Price: $5.99</h2>
                <button>Add to Cart</button>
          </div>
        <a-assets>
          <audio id="click-sound" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
          <!-- Images. -->
          <img id="city" src="sky.jpg">
          <img id="groundTexture" src="floor.jpg">
          <img id="boxTexture" src= "test.jpg">
          <img id="wallTexture" src="brick.jpg">
          <a-mixin id="test"text="align: center; width: 8;value: Design Name: Mama Shark"></a-mixin>
        </a-assets>
        <!--  texts  -->
        <a-text mixin="test" font="kelsonsans" position="0 1 -9" wrap-count="50"></a-text>
        <!-- 360-degree image. -->
        <a-sky id="image-360" radius="20" src="#city">
        </a-sky>

        <a-plane src="#groundTexture" rotation="-90 0 0" width="30" height="30"></a-plane>
        <!-- design box --> 
        <a-box animation="property: scale" material="src: #boxTexture" class="clickable" id="design" geometry="primitive: box"  scale = "4, 3, 0.5" position="0 4 -9.2">

        </a-box>       
        <!-- walls -->
        <!-- front wall -->
        <a-entity  material="src: #wallTexture" id="box" geometry="primitive: box"  scale = "30 15 2" position="0 2 -10" update-walls-every-second></a-entity>
          <!-- side walls -->
        <a-entity material="src: #wallTexture" color="" id="box" geometry="primitive: box"  scale = "30 15 2" position="-10 2 -4" rotation="0 90 0"></a-entity>
        <a-entity material="src: #wallTexture" color="" id="box" geometry="primitive: box"  scale = "30 15 2" position="15 2 -4" rotation="0 90 0"></a-entity>
         <!-- back wall -->
         <a-entity material="src: #wallTexture" color="" id="box" geometry="primitive: box"  scale = "30 15 2" position="0 2 10"></a-entity>
        <a-entity position="0 1 -5">
        <!-- Link we will build. -->
        <a-entity class="link"></a-entity>

        <a-camera look-controls wasd-controls cursor="maxDistance: 30; fuse: true">
            <!-- progress bar -->
            <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
        </a-camera>
      
      </a-scene>
  </body>
  <script src="main.js"></script>
</html>