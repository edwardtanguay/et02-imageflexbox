import './style.scss';
import exercises from './data/github-classroom-exercises.json';

document.querySelector('#app').innerHTML = `
<h1>Items with image icons</h1>
<div clsas="exercises">
		
		${exercises.map(exercise => `
		<div class="exercise">
			<img src="images/exercise.png"><div class="info">${exercise.title}</div>
		</div>
		`).join('')}
</div>
`;
