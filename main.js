import './style.scss';
import exercises from './data/github-classroom-exercises.json';

document.querySelector('#app').innerHTML = `
<h1>Items with image icons</h1>
<div class="exercises">
		
		${exercises.map(exercise => `
		<div class="exercise">
			<img src="images/exercise.png">
			<div class="info">
				<div class="title">${exercise.title}</div>
				<div class="body">${exercise.body}</div>
			</div>
		</div>
		`).join('')}
</div>
`;
