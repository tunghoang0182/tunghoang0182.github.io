// Set the number of snowflakes to create
var numSnowflakes = 50;

// Get the reference to the snowfall container element
var snowfallContainer = document.getElementById('snowfall');

// Create the snowflakes
for (var i = 0; i < numSnowflakes; i++) {
  var snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowfallContainer.appendChild(snowflake);
}

// Set the snowflake animation
function setSnowflakeAnimation(snowflake) {
  var snowflakeDelay = Math.floor(Math.random() * 10);
  var snowflakeDuration = Math.floor(Math.random() * 10) + 5;

  snowflake.style.animationDelay = snowflakeDelay + 's';
  snowflake.style.animationDuration = snowflakeDuration + 's';
}

// Set the animation for each snowflake
var snowflakes = document.getElementsByClassName('snowflake');
for (var i = 0; i < snowflakes.length; i++) {
  setSnowflakeAnimation(snowflakes[i]);
}
