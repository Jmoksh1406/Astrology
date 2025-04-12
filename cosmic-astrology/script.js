// Zodiac Signs Data
const ZODIAC_SIGNS = [
    {
        name: "Aries",
        symbol: "♈",
        dates: "March 21 - April 19",
        element: "Fire",
        traits: "Courageous, energetic, willful, commanding, leading",
        ruling_planet: "Mars",
        compatibility: "Leo, Sagittarius, Gemini",
        description: "Aries is the first sign of the zodiac, and that's pretty much how those born under this sign are: first. Aries are the leaders of the zodiac. Passionate, independent, and unafraid to blaze their own trail no matter what others think."
    },
    {
        name: "Taurus",
        symbol: "♉",
        dates: "April 20 - May 20",
        element: "Earth",
        traits: "Patient, reliable, warmhearted, loving, persistent",
        ruling_planet: "Venus",
        compatibility: "Virgo, Capricorn, Cancer",
        description: "Taurus is the second sign of the zodiac, and those born under this sign are known for being reliable, practical, ambitious and sensual. Represented by the bull, Taureans love comfort, luxury and high-quality experiences."
    },
    {
        name: "Gemini",
        symbol: "♊",
        dates: "May 21 - June 20",
        element: "Air",
        traits: "Versatile, expressive, curious, adaptable, quick-witted",
        ruling_planet: "Mercury",
        compatibility: "Libra, Aquarius, Aries",
        description: "Gemini is the third sign of the zodiac, and those born under this sign are known for being intellectual, expressive, and quick-witted. Represented by the twins, Geminis have many different sides to their personality and are never boring."
    },
    {
        name: "Cancer",
        symbol: "♋",
        dates: "June 21 - July 22",
        element: "Water",
        traits: "Emotional, intuitive, caring, protective, sympathetic",
        ruling_planet: "Moon",
        compatibility: "Scorpio, Pisces, Taurus",
        description: "Cancer is the fourth sign of the zodiac, and those born under this sign are known for being emotional, nurturing, and highly intuitive. Represented by the crab, Cancers have a hard shell that protects their soft, vulnerable interior."
    },
    {
        name: "Leo",
        symbol: "♌",
        dates: "July 23 - August 22",
        element: "Fire",
        traits: "Proud, generous, creative, enthusiastic, loyal",
        ruling_planet: "Sun",
        compatibility: "Aries, Sagittarius, Gemini",
        description: "Leo is the fifth sign of the zodiac, and those born under this sign are known for being dramatic, creative, self-confident, and born leaders. Represented by the lion, Leos love to be in the spotlight and are natural performers."
    },
    {
        name: "Virgo",
        symbol: "♍",
        dates: "August 23 - September 22",
        element: "Earth",
        traits: "Analytical, observant, helpful, reliable, precise",
        ruling_planet: "Mercury",
        compatibility: "Taurus, Capricorn, Cancer",
        description: "Virgo is the sixth sign of the zodiac, and those born under this sign are known for being practical, analytical, and attentive to detail. Represented by the virgin, Virgos are modest, humble, and service-oriented."
    },
    {
        name: "Libra",
        symbol: "♎",
        dates: "September 23 - October 22",
        element: "Air",
        traits: "Diplomatic, fair, social, cooperative, gracious",
        ruling_planet: "Venus",
        compatibility: "Gemini, Aquarius, Leo",
        description: "Libra is the seventh sign of the zodiac, and those born under this sign are known for being diplomatic, fair, and relationship-oriented. Represented by the scales, Libras seek balance and harmony in all areas of life."
    },
    {
        name: "Scorpio",
        symbol: "♏",
        dates: "October 23 - November 21",
        element: "Water",
        traits: "Passionate, intense, magnetic, powerful, secretive",
        ruling_planet: "Pluto, Mars",
        compatibility: "Cancer, Pisces, Virgo",
        description: "Scorpio is the eighth sign of the zodiac, and those born under this sign are known for being passionate, persistent, and mysterious. Represented by the scorpion, Scorpios are intense and often misunderstood."
    },
    {
        name: "Sagittarius",
        symbol: "♐",
        dates: "November 22 - December 21",
        element: "Fire",
        traits: "Adventurous, optimistic, philosophical, direct, open-minded",
        ruling_planet: "Jupiter",
        compatibility: "Aries, Leo, Aquarius",
        description: "Sagittarius is the ninth sign of the zodiac, and those born under this sign are known for being optimistic, freedom-loving, and philosophical. Represented by the archer, Sagittarians are always on a quest for knowledge and adventure."
    },
    {
        name: "Capricorn",
        symbol: "♑",
        dates: "December 22 - January 19",
        element: "Earth",
        traits: "Ambitious, disciplined, patient, careful, practical",
        ruling_planet: "Saturn",
        compatibility: "Taurus, Virgo, Pisces",
        description: "Capricorn is the tenth sign of the zodiac, and those born under this sign are known for being hardworking, ambitious, and persistent. Represented by the sea goat, Capricorns are determined to reach the top through consistent effort."
    },
    {
        name: "Aquarius",
        symbol: "♒",
        dates: "January 20 - February 18",
        element: "Air",
        traits: "Progressive, original, humanitarian, independent, intellectual",
        ruling_planet: "Uranus, Saturn",
        compatibility: "Gemini, Libra, Sagittarius",
        description: "Aquarius is the eleventh sign of the zodiac, and those born under this sign are known for being independent, innovative, and humanitarian. Represented by the water bearer, Aquarians are forward-thinking and focused on making the world better."
    },
    {
        name: "Pisces",
        symbol: "♓",
        dates: "February 19 - March 20",
        element: "Water",
        traits: "Intuitive, compassionate, artistic, gentle, wise",
        ruling_planet: "Neptune, Jupiter",
        compatibility: "Cancer, Scorpio, Capricorn",
        description: "Pisces is the twelfth sign of the zodiac, and those born under this sign are known for being intuitive, empathetic, and deeply creative. Represented by the fish, Pisceans are connected to the spiritual realm and often move between fantasy and reality."
    }
];

// Tarot Cards Data
const TAROT_CARDS = [
    {
        name: "The Fool",
        keywords: "Beginnings, innocence, spontaneity, free spirit",
        meaning: "The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe."
    },
    {
        name: "The Magician",
        keywords: "Manifestation, resourcefulness, power, inspired action",
        meaning: "The Magician represents your ability to communicate clearly, to 'sell' yourself and to be innovative. The Magician has all the tools and resources available to manifest his desired outcome."
    },
    {
        name: "The High Priestess",
        keywords: "Intuition, sacred knowledge, divine feminine, subconscious mind",
        meaning: "The High Priestess represents secrets, mystery, intuition, wisdom, making the impossible possible, and magic. She sits between the conscious and unconscious, reminding us to pay attention to our intuition."
    },
    {
        name: "The Empress",
        keywords: "Femininity, beauty, nature, nurturing, abundance",
        meaning: "The Empress represents creation, manifestation, fertility, femininity, beauty, and nurturing. She brings ideas to life and is associated with growth and abundance."
    },
    {
        name: "The Emperor",
        keywords: "Authority, establishment, structure, father figure",
        meaning: "The Emperor represents power, authority, structure, control, and the balance of power. As a ruler, he creates rules to maintain order and structure in his kingdom."
    },
    {
        name: "The Hierophant",
        keywords: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
        meaning: "The Hierophant represents spiritual wisdom, religious beliefs, conformity, tradition, and institutions. He guides towards the divine through conventional paths and established practices."
    },
    {
        name: "The Lovers",
        keywords: "Love, harmony, relationships, values alignment, choices",
        meaning: "The Lovers represents relationships, choices, and harmony. It often indicates important personal choices that need to be made in alignment with your values and beliefs."
    },
    {
        name: "The Chariot",
        keywords: "Control, willpower, success, action, determination",
        meaning: "The Chariot represents control, willpower, victory, determination, and overcoming obstacles. It signals a time when you need to assert yourself and move forward with confidence."
    },
    {
        name: "Strength",
        keywords: "Courage, persuasion, influence, compassion",
        meaning: "Strength represents courage, persuasion, influence, compassion, and inner strength. It shows you have the ability to overcome any obstacle through your inner strength and patience."
    },
    {
        name: "The Hermit",
        keywords: "Soul-searching, introspection, being alone, inner guidance",
        meaning: "The Hermit represents soul-searching, introspection, solitude, and inner guidance. He suggests a time for self-reflection and looking within for answers."
    },
    {
        name: "Wheel of Fortune",
        keywords: "Good luck, karma, life cycles, destiny, turning point",
        meaning: "The Wheel of Fortune represents good luck, karma, life cycles, destiny, and change. It reminds us that what goes around comes around and that life is constantly in motion."
    },
    {
        name: "Justice",
        keywords: "Justice, fairness, truth, cause and effect, law",
        meaning: "Justice represents fairness, truth, cause and effect, and law. It suggests that all decisions and actions have consequences and encourages fair decision-making."
    },
    {
        name: "The Hanged Man",
        keywords: "Pause, surrender, letting go, new perspectives",
        meaning: "The Hanged Man represents surrender, sacrifice, release, and seeing things from a new perspective. It suggests a time to pause and view things differently."
    },
    {
        name: "Death",
        keywords: "Endings, change, transformation, transition",
        meaning: "Death represents endings, change, transformation, and transition. It signals the end of one phase and the beginning of something new, not physical death."
    },
    {
        name: "Temperance",
        keywords: "Balance, moderation, patience, purpose",
        meaning: "Temperance represents balance, moderation, patience, and purpose. It encourages finding middle ground and bringing harmony to opposing elements in your life."
    },
    {
        name: "The Devil",
        keywords: "Shadow self, attachment, addiction, restriction, sexuality",
        meaning: "The Devil represents shadow self, attachment, addiction, and restriction. It calls attention to the bonds and dependencies that limit you and encourages breaking free."
    },
    {
        name: "The Tower",
        keywords: "Sudden change, upheaval, chaos, revelation, awakening",
        meaning: "The Tower represents sudden change, upheaval, chaos, and awakening. It signifies the collapse of outdated beliefs and structures to make way for truth and new perspectives."
    },
    {
        name: "The Star",
        keywords: "Hope, faith, purpose, renewal, spirituality",
        meaning: "The Star represents hope, faith, purpose, renewal, and spirituality. It brings a sense of optimism and faith after a period of destruction or difficulty."
    },
    {
        name: "The Moon",
        keywords: "Illusion, fear, anxiety, subconscious, intuition",
        meaning: "The Moon represents illusion, fear, anxiety, and the subconscious. It suggests a time when something in your life may not be what it seems, calling for trust in your intuition."
    },
    {
        name: "The Sun",
        keywords: "Success, joy, celebration, positivity, vitality",
        meaning: "The Sun represents success, joy, celebration, and positivity. It indicates fulfillment, achievement, and a time of abundance and satisfaction."
    },
    {
        name: "Judgement",
        keywords: "Rebirth, inner calling, absolution",
        meaning: "Judgement represents rebirth, inner calling, and absolution. It calls for self-evaluation, accepting past mistakes, and embracing new opportunities for growth."
    },
    {
        name: "The World",
        keywords: "Completion, accomplishment, travel, fulfillment",
        meaning: "The World represents completion, accomplishment, travel, and fulfillment. It signifies the successful conclusion of a journey, achievement, and wholeness."
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Zodiac Sign Selection
    const zodiacSigns = document.querySelectorAll('.zodiac-sign');
    const featuredHoroscope = document.querySelector('.featured-horoscope .cosmic-card');
    
    if (zodiacSigns.length > 0 && featuredHoroscope) {
        zodiacSigns.forEach(sign => {
            sign.addEventListener('click', function() {
                // Remove active class from all signs
                zodiacSigns.forEach(s => s.classList.remove('active'));
                
                // Add active class to clicked sign
                this.classList.add('active');
                
                // Get sign data
                const signName = this.getAttribute('data-sign');
                const signData = getZodiacSignByName(signName);
                
                if (signData) {
                    updateHoroscope(signData);
                }
            });
        });
        
        // Set Aries as default active sign
        zodiacSigns[0].classList.add('active');
    }
    
    // Tarot Card Interaction
    const tarotCards = document.querySelectorAll('.tarot-card');
    const drawCardsButton = document.getElementById('draw-cards');
    const readingTypeSelect = document.getElementById('reading-type');
    
    if (tarotCards.length > 0 && drawCardsButton && readingTypeSelect) {
        drawCardsButton.addEventListener('click', function() {
            const readingType = readingTypeSelect.value;
            const cardCount = readingType === 'three-card' ? 3 : 1;
            
            // Get random cards
            const selectedCards = getRandomTarotCards(cardCount);
            
            // Update cards
            tarotCards.forEach((card, index) => {
                if (index < cardCount) {
                    const cardData = selectedCards[index];
                    updateTarotCard(card, cardData);
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Birth Chart Form
    const birthChartForm = document.getElementById('birth-chart-form');
    
    if (birthChartForm) {
        birthChartForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const birthDate = document.getElementById('birth-date').value;
            const birthTime = document.getElementById('birth-time').value;
            const birthLocation = document.getElementById('birth-location').value;
            
            if (birthDate && birthTime && birthLocation) {
                generateBirthChart(birthDate, birthTime, birthLocation);
            }
        });
    }
});

// Helper Functions
function getZodiacSignByName(name) {
    return ZODIAC_SIGNS.find(sign => sign.name.toLowerCase() === name.toLowerCase());
}

function updateHoroscope(signData) {
    const signHeader = document.querySelector('.sign-header');
    const horoscopeText = document.querySelector('.horoscope-text');
    const horoscopeMeta = document.querySelector('.horoscope-meta');
    
    if (signHeader && horoscopeText && horoscopeMeta) {
        // Update sign icon
        const signIcon = signHeader.querySelector('.sign-icon');
        signIcon.textContent = signData.symbol;
        signIcon.className = 'sign-icon ' + signData.name.toLowerCase();
        
        // Update sign info
        signHeader.querySelector('h3').textContent = signData.name;
        signHeader.querySelector('.sign-dates').textContent = signData.dates;
        
        // Update horoscope text
        horoscopeText.textContent = generateDailyHoroscope(signData);
        
        // Update meta info
        horoscopeMeta.innerHTML = `
            <span>Compatibility: ${signData.compatibility}</span>
            <span>Lucky Numbers: ${generateLuckyNumbers()}</span>
        `;
    }
}

function generateDailyHoroscope(signData) {
    const intros = [
        `Today brings a special energy to your life, ${signData.name}.`,
        `The stars align in your favor today, ${signData.name}.`,
        `The cosmic energies are supporting your ${signData.element} nature today, ${signData.name}.`
    ];
    
    const middles = [
        `Your ${signData.traits.split(', ')[0]} qualities are enhanced, making this an excellent day to take initiative.`,
        `You may find yourself feeling more ${signData.traits.split(', ')[1]} than usual, which will help you navigate challenges.`,
        `Your ruling planet ${signData.ruling_planet} is sending positive vibrations your way.`
    ];
    
    const endings = [
        "Trust your instincts and allow your confidence to guide you.",
        "Take time to appreciate the beauty around you and connect with loved ones.",
        "Focus on self-care and nurturing your inner world today."
    ];
    
    const intro = intros[Math.floor(Math.random() * intros.length)];
    const middle = middles[Math.floor(Math.random() * middles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];
    
    return `${intro} ${middle} ${ending}`;
}

function generateLuckyNumbers() {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers.join(', ');
}

function getRandomTarotCards(count) {
    const shuffled = [...TAROT_CARDS];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
}

function updateTarotCard(cardElement, cardData) {
    const cardBack = cardElement.querySelector('.card-back');
    
    if (cardBack) {
        cardBack.querySelector('h3').textContent = cardData.name;
        cardBack.querySelector('.card-keywords').textContent = cardData.keywords;
        cardBack.querySelector('.card-meaning').textContent = cardData.meaning;
    }
}

function generateBirthChart(birthDate, birthTime, birthLocation) {
    // In a real app, this would calculate an actual birth chart
    // For this example, we'll just update the UI with sample data
    
    const chartInfo = document.querySelector('.chart-info');
    const chartPlaceholder = document.querySelector('.chart-placeholder');
    
    if (chartInfo && chartPlaceholder) {
        // Calculate sun sign based on birth date
        const date = new Date(birthDate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        let sunSign;
        
        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            sunSign = "Aries";
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            sunSign = "Taurus";
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            sunSign = "Gemini";
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            sunSign = "Cancer";
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            sunSign = "Leo";
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            sunSign = "Virgo";
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            sunSign = "Libra";
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            sunSign = "Scorpio";
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            sunSign = "Sagittarius";
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            sunSign = "Capricorn";
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            sunSign = "Aquarius";
        } else {
            sunSign = "Pisces";
        }
        
        // Randomly select moon and rising signs
        const signs = ZODIAC_SIGNS.map(sign => sign.name);
        const moonSign = signs[Math.floor(Math.random() * signs.length)];
        const risingSign = signs[Math.floor(Math.random() * signs.length)];
        
        // Update chart info
        chartPlaceholder.style.display = 'none';
        
        chartInfo.innerHTML = `
            <div class="chart-results">
                <h3>Your Birth Chart</h3>
                <p><strong>Birth Date:</strong> ${new Date(birthDate).toLocaleDateString()}</p>
                <p><strong>Birth Time:</strong> ${birthTime}</p>
                <p><strong>Birth Location:</strong> ${birthLocation}</p>
                
                <div class="chart-placements">
                    <div class="placement">
                        <h4>Sun Sign (Core Identity)</h4>
                        <p>${sunSign}</p>
                    </div>
                    <div class="placement">
                        <h4>Moon Sign (Emotional Self)</h4>
                        <p>${moonSign}</p>
                    </div>
                    <div class="placement">
                        <h4>Rising Sign (Outer Appearance)</h4>
                        <p>${risingSign}</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles for chart results
        const style = document.createElement('style');
        style.textContent = `
            .chart-results {
                text-align: left;
                animation: fadeIn 0.5s ease-in;
            }
            
            .chart-results h3 {
                color: var(--cosmic-gold);
                margin-bottom: 15px;
                text-align: center;
            }
            
            .chart-placements {
                margin-top: 20px;
            }
            
            .placement {
                margin-bottom: 15px;
            }
            
            .placement h4 {
                color: var(--cosmic-muted);
                font-size: 0.9rem;
                margin-bottom: 5px;
            }
            
            .placement p {
                color: var(--cosmic-text);
                font-weight: 500;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}