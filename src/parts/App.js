import './App.css';
import React, { Component } from 'react';
import { Container, Header, Button, Modal } from 'semantic-ui-react';
import words from '../words.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.word = words[Math.floor(Math.random() * words.length)].toUpperCase();
		this.shown = new Array(this.word.length).fill('_');
		this.state = {
			shown: this.shown.join(' '),
			lives: 5,
			modalOpen: false,
			disabled: {
				A: false,
				B: false,
				C: false,
				D: false,
				E: false,
				F: false,
				G: false,
				H: false,
				I: false,
				J: false,
				K: false,
				L: false,
				M: false,
				N: false,
				O: false,
				P: false,
				Q: false,
				R: false,
				S: false,
				T: false,
				U: false,
				V: false,
				W: false,
				X: false,
				Y: false,
				Z: false,
				SPACE: false,
			},
		};
	}
	
	disableLetter(letter) {
		const prevDisabled = this.state.disabled;
		prevDisabled[letter] = true;
		this.setState({ disabled: prevDisabled });
	}

	async letterClicked(letter) {
		if (letter === ' ') this.disableLetter('SPACE');
		else this.disableLetter(letter);
		if (!this.word.includes(letter)) {
			await this.setState({ lives: this.state.lives - 1 });
			if (this.state.lives === 0) {
				this.message = 'Oops! You ran out of lives! The word was ' + this.word;
				this.setState({ modalOpen: true });
			}
		}
		for (let i = 0; i < this.word.length; i++) {
			let correct = this.word[i];
			if (letter === correct) {
				if (correct === ' ') this.shown[i] = String.fromCharCode(160);
				else this.shown[i] = letter;
				await this.setState({ shown: this.shown.join(' ') });
				if (this.state.shown.replace(/\s/g, '') === this.word.replace(/\s/g, '')) {
					this.message = 'Congratulations! You won!';
					this.setState({ modalOpen: true });
				}
			}
		}
	}

	render() {
		return (
			<Container>
				<Modal open={this.state.modalOpen}>
					<Modal.Content>
						<Modal.Description>
							{this.message}
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color='green' onClick={() => window.location.reload()}>Replay</Button>
					</Modal.Actions>
				</Modal>
				<Header as='h1' className='centered'>Guess the enemy name (does not include Hidden Wave)</Header>
				<p className='centered large'>{this.state.shown}</p>
				<Header as='h4' className='lives'>Lives left: {this.state.lives}</Header>
				<div className='btnContainer'>
					{/* Buttons here */}
					<Button onClick={() => {this.letterClicked('A');}} disabled={this.state.disabled['A']}>A</Button>
					<Button onClick={() => {this.letterClicked('B');}} disabled={this.state.disabled['B']}>B</Button>
					<Button onClick={() => {this.letterClicked('C');}} disabled={this.state.disabled['C']}>C</Button>
					<Button onClick={() => {this.letterClicked('D');}} disabled={this.state.disabled['D']}>D</Button>
					<Button onClick={() => {this.letterClicked('E');}} disabled={this.state.disabled['E']}>E</Button>
					<Button onClick={() => {this.letterClicked('F');}} disabled={this.state.disabled['F']}>F</Button>
					<Button onClick={() => {this.letterClicked('G');}} disabled={this.state.disabled['G']}>G</Button>
					<Button onClick={() => {this.letterClicked('H');}} disabled={this.state.disabled['H']}>H</Button>
					<Button onClick={() => {this.letterClicked('I');}} disabled={this.state.disabled['I']}>I</Button>
					<Button onClick={() => {this.letterClicked('J');}} disabled={this.state.disabled['J']}>J</Button>
					<Button onClick={() => {this.letterClicked('K');}} disabled={this.state.disabled['K']}>K</Button>
					<Button onClick={() => {this.letterClicked('L');}} disabled={this.state.disabled['L']}>L</Button>
					<Button onClick={() => {this.letterClicked('M');}} disabled={this.state.disabled['M']}>M</Button>
					<Button onClick={() => {this.letterClicked('N');}} disabled={this.state.disabled['N']}>N</Button>
					<Button onClick={() => {this.letterClicked('O');}} disabled={this.state.disabled['O']}>O</Button>
					<Button onClick={() => {this.letterClicked('P');}} disabled={this.state.disabled['P']}>P</Button>
					<Button onClick={() => {this.letterClicked('Q');}} disabled={this.state.disabled['Q']}>Q</Button>
					<Button onClick={() => {this.letterClicked('R');}} disabled={this.state.disabled['R']}>R</Button>
					<Button onClick={() => {this.letterClicked('S');}} disabled={this.state.disabled['S']}>S</Button>
					<Button onClick={() => {this.letterClicked('T');}} disabled={this.state.disabled['T']}>T</Button>
					<Button onClick={() => {this.letterClicked('U');}} disabled={this.state.disabled['U']}>U</Button>
					<Button onClick={() => {this.letterClicked('V');}} disabled={this.state.disabled['V']}>V</Button>
					<Button onClick={() => {this.letterClicked('W');}} disabled={this.state.disabled['W']}>W</Button>
					<Button onClick={() => {this.letterClicked('X');}} disabled={this.state.disabled['X']}>X</Button>
					<Button onClick={() => {this.letterClicked('Y');}} disabled={this.state.disabled['Y']}>Y</Button>
					<Button onClick={() => {this.letterClicked('Z');}} disabled={this.state.disabled['Z']}>Z</Button>
					<Button onClick={() => {this.letterClicked(' ');}} disabled={this.state.disabled['SPACE']}>[SPACE]</Button>
				</div>
			</Container>
		);
	}
}

export default App;
