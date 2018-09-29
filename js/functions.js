function show(box) {
  //console.log("jhdbcjsdc");
  //   var chboxs = document.getElementById("roleUser").value;

  //   //alert(chboxs);
  //   var vis = "none";
  //   if (chboxs == "user") {
  //     //alert("malo sutra");
  //     vis = "block";
  //   } else {
  //     vis = "none";
  //   }
  //   document.getElementById("userType").style.display = vis;

  var chboxs = document.getElementsByName("rbRole");
  var vis = "none";
  //console.log(chboxs);

  //   if (chboxs[0].checked) {
  //     document.getElementById("userType").style.display = "none";
  //     console.log(chboxs[0]);
  //   } else {
  //     document.getElementById("userType").style.display = "visible";
  //     console.log("drugi izabran");
  //   }

  for (var i = 0; i < chboxs.length; i++) {
    if (chboxs[i].checked) {
      if (chboxs[i].value == "user") {
        // console.log(chboxs[i].value);

        vis = "visible";
        console.log(vis);
        break;
      } else {
        vis = "hidden";
      }
    }
  }

  //console.log(vis);
  document.getElementById("userType").style.visibility = vis;
  var role = document.getElementById("userType");
  console.log(role);
}
