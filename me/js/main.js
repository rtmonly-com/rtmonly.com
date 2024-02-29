document.addEventListener('DOMContentLoaded', function() {
  fetch('https://api.lanyard.rest/v1/users/1171261965767807028')
      .then(response => response.json())
      .then(data => {
          const statusDot = document.getElementById('status-dot');
          const discordStatus = data.data.discord_status;
          switch (discordStatus) {
              case 'online':
                  statusDot.style.backgroundColor = 'green';
                  statusDot.style.animation = 'online 1s infinite alternate';
                  break;
              case 'dnd':
                  statusDot.style.backgroundColor = 'red';
                  statusDot.style.animation = 'offline 1s infinite alternate';
                  break;
              case 'idle':
                  statusDot.style.backgroundColor = 'yellow';
                  statusDot.style.animation = 'idle 1s infinite alternate';
                  break;
              case 'offline':
                  statusDot.style.backgroundColor = 'gray';
                  break;
              default:
                  statusDot.style.backgroundColor = 'transparent';
          }

          const activitiesContainer = document.getElementById('activities-container');
          const activities = data.data.activities;

          if (activities.length === 0) {
              const noActivityMessage = document.createElement('p');
              noActivityMessage.textContent = "currently inactive";
              activitiesContainer.appendChild(noActivityMessage);
          } else {
              activities.forEach(activity => {
                  const activityDiv = document.createElement('div');
                  activityDiv.classList.add('activity');

                  if (activity.type === 2 && activity.name === 'Spotify') {
                      const spotifyActivity = `
                          <i class="fab fa-spotify"></i>
                          Listening to: ${activity.details} by ${activity.state} on ${activity.assets.large_text}
                      `;
                      activityDiv.innerHTML = spotifyActivity;
                  }

                  if (activity.type === 0 && activity.name === 'Visual Studio Code') {
                      const vscodeActivity = `
                          <i class="fas fa-code"></i>
                          Editing: ${activity.details}
                      `;
                      activityDiv.innerHTML = vscodeActivity;
                  }

                  activitiesContainer.appendChild(activityDiv);
              });
          }
      })
      .catch(error => console.error('Error fetching activities:', error));

  document.getElementById('discord-link').addEventListener('click', () => {
      const discordUsername = 'rtmonly';
      navigator.clipboard.writeText(discordUsername).then(() => {
          const notificationBox = document.getElementById('notification-box');
          notificationBox.textContent = 'Copied Discord user!';
          notificationBox.style.display = 'block';

          setTimeout(() => {
              notificationBox.style.display = 'none';
          }, 2000);
      }).catch(err => {
          console.error('Error copying to clipboard:', err);
      });
  });
});

const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-button');
const playPauseIcon = document.getElementById('play-pause-icon');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseIcon.classList.remove('fa-play');
    playPauseIcon.classList.add('fa-pause');
  } else {
    audioPlayer.pause();
    playPauseIcon.classList.remove('fa-pause');
    playPauseIcon.classList.add('fa-play');
  }
});

audioPlayer.addEventListener('timeupdate', () => {
  const progressValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.value = progressValue;
  
  const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
  const currentSeconds = Math.floor(audioPlayer.currentTime % 60);
  currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  
  const durationMinutes = Math.floor(audioPlayer.duration / 60);
  const durationSeconds = Math.floor(audioPlayer.duration % 60);
  duration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});
