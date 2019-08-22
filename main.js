// var unique = require('uniq');
// require('aframe');
// var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// console.log(unique(data));

document.querySelector('a-box').addEventListener('click', function(){
    $("#main-ui").css("visibility","visible");
    console.log('event fired');
  });

  document.querySelector('a-box').addEventListener('mouseleave', function(){
    $("#main-ui").css("visibility","hidden");
    console.log('event fired');
  });

  //change size of design size
  const selectElement = document.querySelector('.design-size');
  selectElement.addEventListener('change', (event) => {
  const selectvalue = event.target.value;
  var design3d = document.querySelector('a-box');
  var text = document.querySelector('a-mixin');
  console.log('selectvalue' + selectvalue);

  switch (selectvalue) {
    case "10x8": 
      design3d.object3D.scale.set(1, 0.8, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text", "value", "Design Name: Mama Shark, Price: $7.99, Size:  large");
      break;
      console.log('large select fired');
    case "12x10":
      design3d.object3D.scale.set(1.2, 1, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $4.99, Size:  small");
    break;
    console.log('small select fired');
    case "14x11":
      design3d.object3D.scale.set(1.4, 1.1, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "16x12":
      design3d.object3D.scale.set(1.6, 1.2, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "20x16":
      design3d.object3D.scale.set(2, 1.6, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "24x30":
      design3d.object3D.scale.set(2.4, 3, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "30x20":
      design3d.object3D.scale.set(3, 2, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "40x30":
      design3d.object3D.scale.set(4, 3, 0.5);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;

    case "8x10": 
      design3d.object3D.scale.set(0.8, 1, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text", "value", "Design Name: Mama Shark, Price: $7.99, Size:  large");
      break;
      console.log('large select fired');
    case "10x12":
      design3d.object3D.scale.set(1, 1.2, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $4.99, Size:  small");
    break;
    console.log('small select fired');
    case "11x14":
      design3d.object3D.scale.set(1.1, 1.4, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "12x16":
      design3d.object3D.scale.set(1.2, 1.6, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "16x20":
      design3d.object3D.scale.set(1.6, 2, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "30x24":
      design3d.object3D.scale.set(3, 2.4, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "20x30":
      design3d.object3D.scale.set(2, 3, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "20x24":
      design3d.object3D.scale.set(2, 2.4, 0.2);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;
    case "30x40":
      design3d.object3D.scale.set(3, 4, 0.5);
      design3d.object3D.scale.z += 1;
      text.setAttribute("text","value", "Design Name: Mama Shark, Price: $5.99, Size:  medium");
    break;

    default:
    }
  });
  
// update texture of design based on selection from uploads dir
  const selectElementDesignTex =  document.querySelector('.selectdesign');
  
  selectElementDesignTex.addEventListener('change', (event) => {
    const selectvalue3 = event.target.value;
    var designTex = document.querySelector('a-box');
    console.log('selectvalue' + selectvalue3);
    /// UPDATE THIS - MAKE THIS Dynamic - URL should find root 
     designTex.setAttribute('material', 'src', '/projects/Progressive%20App%20Dev/AFrame/uploads/'+selectvalue3);
    
     // update name of design on menu 
    const designvalueText = selectvalue3.toString();

    //remove image exstention for dispaly
    const designvalueTextJPGTrim = designvalueText.substr(0, designvalueText.lastIndexOf('.'));
    console.log('Design Selected Name' + selectvalue3);
    $('.design-name').html(designvalueTextJPGTrim);
    });

 

  //change wall textures 
  const selectElementTex = document.querySelector('.wall-texture');
  selectElementTex.addEventListener('change', (event) => {
  const selectvalue2 = event.target.value;
  var wallpapertex = document.querySelector('a-entity');
  console.log('selectvalue' + selectvalue2);

  switch (selectvalue2) {
    case "white-brick": 
    wallpapertex.setAttribute('material', 'src', '#wallTexture');
    break;
      console.log('white brick selected');
    case "modern-black":
    wallpapertex.setAttribute('material', 'src', '#modern-black');
    break;
    console.log('modern black selected');
    case "brown-wallpaper":
    wallpapertex.setAttribute('material', 'src', '#brown-wallpaper');
    break;
    console.log('brown wallpaper selected');
    default:
    }
  });

   /*
       COLOR PICKER
        By default, the color picker is a popup which appears when you click the parent.
    */
    var parent = document.querySelector('#parent');
    var picker = new Picker(parent);

    /*
        You can do what you want with the chosen color using two callbacks: onChange and onDone.
    */
    picker.onChange = function(color) {
      var wallpapertex = document.querySelector('a-entity');
      const wallpapercolor = color.rgbaString;  
      wallpapertex.setAttribute('material', 'src', '');
      wallpapertex.setAttribute('material', 'color', wallpapercolor); //test
    };
