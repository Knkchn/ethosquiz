class EthOSQuiz {
    constructor() {
        this.allQuestions = [
            {
                question: "What is the full name of ethOS?",
                options: ["Ethereum Operating System", "Ethereum Online Service", "Ethereum Open Source"],
                correct: 0
            },
            {
                question: "Which blockchain does ethOS operate on?",
                options: ["Bitcoin", "Ethereum", "Binance Smart Chain"],
                correct: 1
            },
            {
                question: "What is the main purpose of ethOS?",
                options: ["Only DeFi transactions", "Social and revenue-focused DeFi 'operating system'", "NFT collection creation"],
                correct: 1
            },
            {
                question: "How is user interaction defined in ethOS?",
                options: ["Gameware experience", "Pumpware experience", "Shareware experience"],
                correct: 1
            },
            {
                question: "Which token powers the reward system in ethOS?",
                options: ["ETH token", "AIR token", "GAS token"],
                correct: 1
            },
            {
                question: "What is the AIR token coding system based on?",
                options: ["Only transaction volume", "Social media shares", "Staking amount"],
                correct: 1
            },
            {
                question: "How long does each epoch last in ethOS?",
                options: ["1 day", "Approximately 3 days", "1 week"],
                correct: 1
            },
            {
                question: "How can gas fees be paid in ethOS?",
                options: ["Only with ETH", "Directly with the transaction token", "Only with AIR token"],
                correct: 1
            },
            {
                question: "Which platform is ethOS's social media strategy conducted through?",
                options: ["Instagram", "X (formerly Twitter)", "TikTok"],
                correct: 1
            },
            {
                question: "What are the main hashtags used in ethOS?",
                options: ["#EthOSVision and #EthereumOS", "#EthOS and #DeFi", "#Ethereum and #Blockchain"],
                correct: 0
            },
            {
                question: "Which activities are rewarded in ethOS?",
                options: ["Only token trading", "Tweeting, sharing, GM messages", "Only staking"],
                correct: 1
            },
            {
                question: "How is ethOS's reward system controlled?",
                options: ["Completely automatic", "Manual query and evaluation systems", "Only with AI"],
                correct: 1
            },
            {
                question: "What does 'full code' mean in ethOS?",
                options: ["Complete programming code", "Full reward code users can earn", "Open source code"],
                correct: 1
            },
            {
                question: "What advantage do early users have in ethOS?",
                options: ["Lower transaction fees", "Higher AIR rewards", "Free NFT"],
                correct: 1
            },
            {
                question: "What is the current code transparency status of ethOS?",
                options: ["Completely open source", "Not yet open source", "Partially open source"],
                correct: 1
            },
            {
                question: "How is access to ethOS currently provided?",
                options: ["Through GitHub", "Limited to social media / Discord", "Through official website"],
                correct: 1
            },
            {
                question: "What does ethOS's smart contract structure include?",
                options: ["Only token transfer", "Token, reward and on-chain fee payment logic", "Only staking functions"],
                correct: 1
            },
            {
                question: "What is the security and audit status of ethOS?",
                options: ["Public audit report available", "Not public, manual review conducted", "Automatic security system available"],
                correct: 1
            },
            {
                question: "What is ethOS's airdrop mechanism based on?",
                options: ["Only token holding", "Social media + content-based epoch-based coding", "Only referral system"],
                correct: 1
            },
            {
                question: "What does GM message mean in ethOS?",
                options: ["Game Mode", "Good Morning", "Get Money"],
                correct: 1
            },
            {
                question: "What is the main difference between ethOS and academic Ethos OS?",
                options: ["They are the same project", "ethOS is DeFi-focused, Ethos OS is academic security research", "Only the name is different"],
                correct: 1
            },
            {
                question: "What type of rewards can users earn in ethOS?",
                options: ["Only ETH", "AIR tokens through social activities", "Only NFTs"],
                correct: 1
            },
            {
                question: "How often are airdrops distributed in ethOS?",
                options: ["Daily", "Every epoch (approximately 3 days)", "Weekly"],
                correct: 1
            },
            {
                question: "What is required for ethOS participation?",
                options: ["Only wallet connection", "Active social media engagement", "Minimum token holding"],
                correct: 1
            },
            {
                question: "What makes ethOS unique in the DeFi space?",
                options: ["Highest yields", "Integration of social media with DeFi rewards", "Fastest transactions"],
                correct: 1
            },
            {
                question: "What is the current development stage of ethOS?",
                options: ["Fully launched", "In development with limited access", "Concept stage only"],
                correct: 1
            },
            {
                question: "How does ethOS handle transaction fees?",
                options: ["Standard ETH gas fees only", "Smart contract integration for fee payments", "No fees required"],
                correct: 1
            },
            {
                question: "What is the primary community platform for ethOS?",
                options: ["Telegram", "Discord and X (Twitter)", "Reddit"],
                correct: 1
            },
            {
                question: "What type of content is rewarded in ethOS?",
                options: ["Any content", "ethOS-related posts and engagement", "Only technical content"],
                correct: 1
            },
            {
                question: "What is the long-term vision of ethOS?",
                options: ["Replace Ethereum", "Become a super operating system on Ethereum", "Create a new blockchain"],
                correct: 1
            },
            // 20 new questions added:
            {
                question: "What does the 'pumpware' experience in ethOS refer to?",
                options: ["Hardware requirements", "User engagement and reward mechanics", "Software installation process"],
                correct: 1
            },
            {
                question: "How does ethOS differentiate from traditional DeFi platforms?",
                options: ["Lower fees only", "Social media integration with financial rewards", "Faster transaction speeds only"],
                correct: 1
            },
            {
                question: "What is the significance of epoch-based rewards in ethOS?",
                options: ["Random reward distribution", "Structured 3-day reward cycles", "Annual reward calculation"],
                correct: 1
            },
            {
                question: "Which social media activities are NOT rewarded in ethOS?",
                options: ["Tweeting about ethOS", "Sharing ethOS content", "Private messaging about ethOS"],
                correct: 2
            },
            {
                question: "What is the primary benefit of early ethOS adoption?",
                options: ["Free tokens", "Higher AIR reward multipliers", "Exclusive NFT access"],
                correct: 1
            },
            {
                question: "How does ethOS handle smart contract security?",
                options: ["Public audits available", "Manual review processes", "Community-based verification"],
                correct: 1
            },
            {
                question: "What role does Discord play in the ethOS ecosystem?",
                options: ["Primary trading platform", "Community engagement and support", "Code repository hosting"],
                correct: 1
            },
            {
                question: "What is the maximum AIR tokens a user can earn per epoch?",
                options: ["No limit", "Based on activity level and coding system", "Fixed amount for all users"],
                correct: 1
            },
            {
                question: "How does ethOS plan to scale its operations?",
                options: ["Move to different blockchain", "Leverage Ethereum's infrastructure", "Create proprietary network"],
                correct: 1
            },
            {
                question: "What is the relationship between ethOS and Ethereum gas fees?",
                options: ["ethOS eliminates all gas fees", "ethOS allows payment with transaction tokens", "ethOS doubles gas fees"],
                correct: 1
            },
            {
                question: "What type of governance model does ethOS follow?",
                options: ["Fully decentralized DAO", "Community-driven with development team guidance", "Centralized corporate structure"],
                correct: 1
            },
            {
                question: "How often does ethOS update its reward algorithms?",
                options: ["Never", "Based on community feedback and system performance", "Daily automatic updates"],
                correct: 1
            },
            {
                question: "What is required to maintain high AIR rewards in ethOS?",
                options: ["Large token holdings", "Consistent social media engagement", "Technical contributions only"],
                correct: 1
            },
            {
                question: "How does ethOS verify social media activities for rewards?",
                options: ["Automatic API integration", "Manual verification systems", "Blockchain-based verification"],
                correct: 1
            },
            {
                question: "What is the primary programming language used in ethOS development?",
                options: ["Python", "Solidity for smart contracts", "JavaScript only"],
                correct: 1
            },
            {
                question: "How does ethOS handle user privacy?",
                options: ["Full anonymity", "Pseudonymous with social media linking", "Complete KYC requirements"],
                correct: 1
            },
            {
                question: "What is the minimum activity required to earn AIR tokens?",
                options: ["Daily login", "Active social media participation", "Monthly token purchase"],
                correct: 1
            },
            {
                question: "How does ethOS plan to integrate with other DeFi protocols?",
                options: ["No integration planned", "Strategic partnerships and interoperability", "Acquisition of other protocols"],
                correct: 1
            },
            {
                question: "What is the expected timeline for ethOS full public launch?",
                options: ["Already launched", "Development ongoing with limited access", "Launch cancelled"],
                correct: 1
            },
            {
                question: "How does ethOS measure user engagement quality?",
                options: ["Post count only", "Comprehensive social media analytics and coding system", "Random selection"],
                correct: 1
            }
        ];
        
        this.questions = [];
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.answered = false;
        this.startTime = null;
        this.endTime = null;
        this.timerInterval = null;
        this.timeRemaining = 600; // 10 minutes in seconds
        
        // Initialize Sound Manager
        this.soundManager = new SoundManager();
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        // Screens
        this.homeScreen = document.getElementById('home-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.gameoverScreen = document.getElementById('gameover-screen');
        
        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.homeBtnQuiz = document.getElementById('home-btn-quiz');
        this.homeBtnGameover = document.getElementById('home-btn-gameover');
        this.shareBtn = document.getElementById('share-btn');
        
        // Quiz elements
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.questionCounter = document.getElementById('question-counter');
        this.currentScoreElement = document.getElementById('current-score');
        this.progressFill = document.getElementById('progress-fill');
        this.timer = document.getElementById('timer');
        
        // Result elements
        this.resultEmoji = document.getElementById('result-emoji');
        this.finalScore = document.getElementById('final-score');
        this.resultMessage = document.getElementById('result-message');
        this.correctAnswers = document.getElementById('correct-answers');
        this.wrongAnswers = document.getElementById('wrong-answers');
        this.accuracyRate = document.getElementById('accuracy-rate');
        this.totalTime = document.getElementById('total-time');
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => {
            this.soundManager.play('click');
            this.startQuiz();
        });
        this.nextBtn.addEventListener('click', () => {
            this.soundManager.play('click');
            this.nextQuestion();
        });
        this.playAgainBtn.addEventListener('click', () => {
            this.soundManager.play('click');
            this.startQuiz();
        });
        this.homeBtnQuiz.addEventListener('click', () => {
            this.soundManager.play('click');
            this.goHome();
        });
        this.homeBtnGameover.addEventListener('click', () => {
            this.soundManager.play('click');
            this.goHome();
        });
        this.shareBtn.addEventListener('click', () => {
            this.soundManager.play('click');
            this.shareOnX();
        });
    }
    
    getRandomQuestions() {
        const shuffled = [...this.allQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 10);
    }
    
    startQuiz() {
        this.questions = this.getRandomQuestions();
        this.currentQuestion = 0;
        this.score = 0;
        this.startTime = new Date();
        this.endTime = null;
        this.timeRemaining = 600; // Reset to 10 minutes
        this.showScreen('quiz');
        this.soundManager.play('gameStart');
        this.soundManager.startBackgroundMusic();
        this.startTimer();
        this.loadQuestion();
    }
    
    startTimer() {
        this.updateTimerDisplay();
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            // Warning sound for last 10 seconds
            if (this.timeRemaining <= 10 && this.timeRemaining > 0) {
                this.soundManager.play('timeWarning');
            }
            
            // Time's up
            if (this.timeRemaining <= 0) {
                this.soundManager.play('timeUp');
                this.showGameOver();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change timer color when time is running low
        if (this.timeRemaining <= 60) {
            this.timer.style.color = '#ff4757';
        } else if (this.timeRemaining <= 180) {
            this.timer.style.color = '#ffa502';
        } else {
            this.timer.style.color = '#2f3542';
        }
    }
    
    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.endTime = new Date();
        this.soundManager.stopBackgroundMusic();
    }
    
    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        this.selectedAnswer = null;
        this.answered = false;
        
        // Update question text
        this.questionText.textContent = question.question;
        
        // Create options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
            optionElement.addEventListener('click', () => {
                this.soundManager.play('click');
                this.selectAnswer(index, optionElement);
            });
            this.optionsContainer.appendChild(optionElement);
        });
        
        // UI updates
        this.updateProgress();
        this.updateQuestionCounter();
        this.updateScore();
        this.updateNextButton();
        this.nextBtn.disabled = true;
        
        // Play transition sound
        this.soundManager.play('transition');
    }
    
    updateNextButton() {
        // Check if this is the last question
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtn.textContent = 'Finish Quiz';
        } else {
            this.nextBtn.textContent = 'Next Question';
        }
    }
    
    selectAnswer(answerIndex, optionElement) {
        if (this.answered) return;
        
        // Remove previous selection
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Add selection to clicked option
        optionElement.classList.add('selected');
        this.selectedAnswer = answerIndex;
        this.nextBtn.disabled = false;
    }
    
    checkAnswer() {
        if (this.selectedAnswer === null) return;
        
        this.answered = true;
        const question = this.questions[this.currentQuestion];
        const isCorrect = this.selectedAnswer === question.correct;
        
        if (isCorrect) {
            this.score++;
            this.soundManager.play('correct');
        } else {
            this.soundManager.play('wrong');
        }
        
        // Show correct/incorrect styling
        document.querySelectorAll('.option').forEach((opt, index) => {
            if (index === question.correct) {
                opt.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    }
    
    nextQuestion() {
        this.checkAnswer();
        
        setTimeout(() => {
            this.currentQuestion++;
            if (this.currentQuestion < this.questions.length) {
                this.loadQuestion();
            } else {
                this.showGameOver();
            }
        }, 1500);
    }
    
    showGameOver() {
        this.stopTimer();
        
        // Calculate stats
        const totalQuestions = this.questions.length;
        const correctAnswers = this.score;
        const wrongAnswers = totalQuestions - correctAnswers;
        const accuracyRate = Math.round((correctAnswers / totalQuestions) * 100);
        
        // Calculate time taken
        const timeTaken = this.endTime ? Math.floor((this.endTime - this.startTime) / 1000) : (600 - this.timeRemaining);
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        
        // Update result elements
        this.finalScore.textContent = `${correctAnswers}/${totalQuestions}`;
        this.correctAnswers.textContent = correctAnswers;
        this.wrongAnswers.textContent = wrongAnswers;
        this.accuracyRate.textContent = `${accuracyRate}%`;
        this.totalTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Set result message based on score
        let message = '';
        if (accuracyRate >= 90) {
            message = 'Excellent! You are an ethOS expert!';
            this.soundManager.play('gameEndHigh');
            console.log('Triggering confetti for 90%+ score:', accuracyRate);
            this.triggerConfetti(); // Confetti for excellent scores
        } else if (accuracyRate >= 80) {
            message = 'Amazing! You know ethOS very well!';
            this.soundManager.play('gameEndHigh');
            console.log('Triggering confetti for 80%+ score:', accuracyRate);
            this.triggerConfetti(); // Confetti for great scores
        } else if (accuracyRate >= 70) {
            message = 'Great job! You know ethOS well!';
            this.soundManager.play('gameEndMedium');
        } else if (accuracyRate >= 50) {
            message = 'Good effort! Keep learning about ethOS!';
            this.soundManager.play('gameEndLow');
        } else {
            message = 'Keep studying! There\'s more to learn about ethOS!';
            this.soundManager.play('gameEndLow');
        }
        
        this.resultMessage.textContent = message;
        this.showScreen('gameover');
    }
    
    triggerConfetti() {
        console.log('Confetti function called!');
        // Create confetti container
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti-container';
        document.body.appendChild(confettiContainer);
        console.log('Confetti container created and added to body');
        
        // Generate confetti pieces
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#38f9d7'];
        const confettiCount = 150; // Increased from 100
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                this.createConfettiPiece(confettiContainer, colors);
            }, i * 20); // Reduced delay from 30 to 20
        }
        
        // Remove confetti container after animation
        setTimeout(() => {
            if (confettiContainer.parentNode) {
                confettiContainer.parentNode.removeChild(confettiContainer);
                console.log('Confetti container removed');
            }
        }, 6000); // Increased from 4000 to 6000
    }
    
    createConfettiPiece(container, colors) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        // Random properties
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 15 + 8; // Increased size from 10+5 to 15+8
        const startX = Math.random() * window.innerWidth;
        const endX = startX + (Math.random() - 0.5) * 300; // Increased spread
        const duration = Math.random() * 3 + 3; // Increased duration from 2+2 to 3+3
        const delay = Math.random() * 0.3; // Reduced delay
        
        // Set styles
        confetti.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            left: ${startX}px;
            top: -20px;
            z-index: 10000;
            pointer-events: none;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${duration}s ease-in ${delay}s forwards;
            transform: rotate(${Math.random() * 360}deg);
            box-shadow: 0 0 10px rgba(255,255,255,0.5);
        `;
        
        container.appendChild(confetti);
        
        // Remove individual confetti piece after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, (duration + delay) * 1000 + 1000);
    }
    
    shareOnX() {
        const totalQuestions = this.questions.length;
        const correctAnswers = this.score;
        const accuracyRate = Math.round((correctAnswers / totalQuestions) * 100);
        
        const shareText = `I just completed the ethOS Quiz! 🚀\n\n` +
                         `📊 My Score: ${correctAnswers}/${totalQuestions} (${accuracyRate}%)\n` +
                         `🎯 Test your ethOS knowledge too!\n\n` +
                         `#EthOSVision #EthereumOS @Ethereum_OS`;
        
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
        window.open(twitterUrl, '_blank');
    }
    
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    updateQuestionCounter() {
        this.questionCounter.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;
    }
    
    updateScore() {
        this.currentScoreElement.textContent = this.score;
    }
    
    showScreen(screenName) {
        // Hide all screens
        this.homeScreen.style.display = 'none';
        this.quizScreen.style.display = 'none';
        this.gameoverScreen.style.display = 'none';
        
        // Show selected screen
        switch(screenName) {
            case 'home':
                this.homeScreen.style.display = 'flex';
                break;
            case 'quiz':
                this.quizScreen.style.display = 'flex';
                break;
            case 'gameover':
                this.gameoverScreen.style.display = 'flex';
                break;
        }
    }
    
    goHome() {
        this.stopTimer();
        this.showScreen('home');
    }
}

// Sound Manager Class
class SoundManager {
    constructor() {
        this.sounds = {};
        this.backgroundMusic = null;
        this.isMuted = false;
        this.volume = 0.7;
        
        this.initializeSounds();
    }
    
    initializeSounds() {
        // Create audio context for better browser compatibility
        try {
            // Basic game sounds using Web Audio API oscillators
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported, using fallback sounds');
        }
    }
    
    // Generate sounds using Web Audio API
    generateTone(frequency, duration, type = 'sine', volume = 0.3) {
        if (!this.audioContext || this.isMuted) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(volume * this.volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }
    
    play(soundName) {
        if (this.isMuted) return;
        
        switch(soundName) {
            case 'correct':
                // Happy ascending tone
                this.generateTone(523.25, 0.2, 'sine', 0.4); // C5
                setTimeout(() => this.generateTone(659.25, 0.2, 'sine', 0.4), 100); // E5
                setTimeout(() => this.generateTone(783.99, 0.3, 'sine', 0.4), 200); // G5
                break;
                
            case 'wrong':
                // Descending error tone
                this.generateTone(349.23, 0.3, 'sawtooth', 0.3); // F4
                setTimeout(() => this.generateTone(293.66, 0.4, 'sawtooth', 0.3), 150); // D4
                break;
                
            case 'click':
                // Short click sound
                this.generateTone(800, 0.1, 'square', 0.2);
                break;
                
            case 'transition':
                // Soft transition sound
                this.generateTone(440, 0.15, 'sine', 0.2);
                break;
                
            case 'timeWarning':
                // Urgent beep
                this.generateTone(1000, 0.1, 'square', 0.4);
                break;
                
            case 'timeUp':
                // Alarm sound
                for(let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        this.generateTone(800, 0.2, 'square', 0.5);
                        setTimeout(() => this.generateTone(600, 0.2, 'square', 0.5), 100);
                    }, i * 300);
                }
                break;
                
            case 'gameStart':
                // Fanfare
                this.generateTone(523.25, 0.2, 'sine', 0.4); // C5
                setTimeout(() => this.generateTone(659.25, 0.2, 'sine', 0.4), 200); // E5
                setTimeout(() => this.generateTone(783.99, 0.2, 'sine', 0.4), 400); // G5
                setTimeout(() => this.generateTone(1046.50, 0.4, 'sine', 0.4), 600); // C6
                break;
                
            case 'gameEndHigh':
                // Victory fanfare
                const victoryNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
                victoryNotes.forEach((note, index) => {
                    setTimeout(() => this.generateTone(note, 0.3, 'sine', 0.4), index * 150);
                });
                break;
                
            case 'gameEndMedium':
                // Good job sound
                this.generateTone(523.25, 0.3, 'sine', 0.4);
                setTimeout(() => this.generateTone(659.25, 0.3, 'sine', 0.4), 200);
                setTimeout(() => this.generateTone(783.99, 0.5, 'sine', 0.4), 400);
                break;
                
            case 'gameEndLow':
                // Encouraging sound
                this.generateTone(440, 0.4, 'sine', 0.3);
                setTimeout(() => this.generateTone(523.25, 0.4, 'sine', 0.3), 300);
                break;
        }
    }
    
    startBackgroundMusic() {
        if (this.isMuted || this.backgroundMusic) return;
        
        // Simple ambient background music
        this.playBackgroundLoop();
    }
    
    playBackgroundLoop() {
        if (this.isMuted) return;
        
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        let noteIndex = 0;
        
        this.backgroundMusic = setInterval(() => {
            if (!this.isMuted) {
                this.generateTone(notes[noteIndex], 2, 'sine', 0.05);
                noteIndex = (noteIndex + 1) % notes.length;
            }
        }, 4000);
    }
    
    stopBackgroundMusic() {
        if (this.backgroundMusic) {
            clearInterval(this.backgroundMusic);
            this.backgroundMusic = null;
        }
    }
    
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBackgroundMusic();
        }
        return this.isMuted;
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new EthOSQuiz();
});