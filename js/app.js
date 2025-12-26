function getPlan(level) {
  var beginner = ["Push Day", "Pull Day", "Legs Day", "Rest", "Full Body", "Cardio", "Rest"];
  var intermediate = ["Push", "Pull", "Legs", "Cardio", "Upper", "Lower", "Rest"];
  var advanced = ["Push (Heavy)", "Pull (Heavy)", "Legs (Heavy)", "Push (Volume)", "Pull (Volume)", "Legs (Volume)", "Cardio"];

  if (level === "beginner") {
    return beginner;
  } else if (level === "intermediate") {
    return intermediate;
  } else {
    return advanced;
  }
}

function renderPlan(planArray) {
  var html = "<h3>Your 7-Day Plan</h3><ul>";

  for (var i = 0; i < planArray.length; i++) {
    html += "<li>Day " + (i + 1) + ": " + planArray[i] + "</li>";
  }

  html += "</ul>";
  return html;
}

var btnGenerate = document.getElementById("btnGenerate");
if (btnGenerate) {
  btnGenerate.addEventListener("click", function () {
    var level = document.getElementById("level").value;
    var plan = getPlan(level);

    console.log("Selected level:", level);
    alert("Plan generated for: " + level);

    document.getElementById("planOutput").innerHTML = renderPlan(plan);
  });
}

function validateJoin(name, age) {
  if (name === "") {
    return "Please enter your full name.";
  }

  if (age === "") {
    return "Please enter your age.";
  }

  var ageNum = Number(age);

  if (isNaN(ageNum)) {
    return "Age must be a number.";
  } else if (ageNum < 16) {
    return "You must be at least 16 to join.";
  } else {
    return "OK";
  }
}

var btnJoin = document.getElementById("btnJoin");
if (btnJoin) {
  btnJoin.addEventListener("click", function () {
    var name = document.getElementById("fullName").value;
    var age = document.getElementById("age").value;
    var goal = document.getElementById("goal").value;

    var check = validateJoin(name, age);

    if (check !== "OK") {
      alert(check);
      document.getElementById("joinOutput").innerHTML = "<p><strong>Error:</strong> " + check + "</p>";
      return;
    }

    var msg = "";
    if (goal === "bulk") {
      msg = "Bulk goal selected. Focus on progressive overload.";
    } else if (goal === "cut") {
      msg = "Cut goal selected. Keep protein high and add cardio.";
    } else {
      msg = "Maintenance goal selected. Balance training and recovery.";
    }

    document.getElementById("joinOutput").innerHTML =
      "<p><strong>Welcome, " + name + "!</strong></p>" +
      "<p>Age: " + age + "</p>" +
      "<p>" + msg + "</p>";

    alert("Form submitted successfully!");

    document.getElementById("joinForm").reset();
  });
}
