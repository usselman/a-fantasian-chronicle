// Create a Tracery grammar
window.onload = function () {
    const grammar = tracery.createGrammar({
        //hymn
        hymn: ['Sing #emotion#ly, for #entity#! Praise be to #entity#, the #quality# guide along the #path#!',
            'In #entity#, we find our #blessing#. As the #entity# lights our way, we step forth into the realm of #concept#!',
            'Praise the #entity#, the #quality# one! #entity#, who offers #blessing#, guides us towards the harmony of #concept#!',
            '#greeting#, #greeting#, to the #entity#! For in the #entity#, we find the touch of #concept#, and therein lies our #blessing#!'],
        greeting: ['Hosanna', 'Blessed be', 'Rejoice', 'In wisdom\'s wake'],
        emotion: ['joyful', 'exuberant', 'heavenly', 'harmonious'],
        entity: ['St. Elian', 'St. Alyra', 'St. Lucian', 'St. Meliora', 'St. Eosphoros', 'St. Talia', 'St. Raphael', 'St. Serene', 'St. Theodora', 'St. Uriel'],
        blessing: ['light', 'harmony', 'wisdom', 'completion', 'peace', 'guidance', 'generosity', 'unity', 'enlightenment', 'balance'],
        quality: ['enlightened', 'harmonious', 'watchful', 'fulfilled', 'peaceful', 'seeking', 'giving', 'united', 'wise', 'balanced'],
        path: ['Aeon Watch', 'Divine Completion', 'Sephiratic Path', 'Cosmic Harmony', 'Dreamer\'s Wake', 'Illuminated Path', 'Assembly of Giving'],
        //history
        history: ['In the age of #year#, #entity# #verb# #event#. Their influence spread across the land, changing the course of our understanding of #concept#.',
            'Remember when #entity# #verb# #event# in the time of #year#. This marked a time of great #blessing#, bringing us closer to the #concept#.',
            'The annals of time recall #entity# and their #event# in the days of #year#. It was an era of #concept#, and the teachings of #entity# became our #blessing#.'],
        event: ['a spiritual awakening', 'the founding of an Order', 'a great revelation', 'the cosmic alignment'],
        year: ['the Great Eclipse', 'the Harmonic Concordance', 'the Dreamer\'s Epiphany', 'the Sephiratic Renaissance'],
        verb: ['ushered in', 'led to', 'gave birth to', 'marked'],
        //myth
        myth: ['Once, #entity# journeyed to the #object#. #detail#. Through their trials, they discovered the essence of #concept#. This is the tale of their journey.',
            'In ancient days, #entity# #verb# the #object#. #detail#. Their actions rippled through time, shaping the essence of #concept#. Thus began the era of their influence.'],
        object: ['Aeon Watch', 'Divine Completion', 'Sephiratic path', 'Cosmic Harmony', 'Dreamer\'s Wake', 'Illuminated Path', 'Assembly of Giving'],
        verb: ['discovered', 'mastered', 'traversed', 'founded', 'embraced', 'revealed', 'established'],
        detail: ['Their journey became our path', 'Their wisdom became our guide', 'Their revelation illuminated our world', 'Their harmony became our melody'],
        concept: ['enlightenment', 'harmony', 'watchfulness', 'completion', 'peacefulness', 'seeking', 'giving', 'unity', 'wisdom', 'balance'],
        //hadith
        hadith: ['"Seek not only #concept#, but understand its source. To truly know the divine, one must comprehend both #concept# and #quality#. It is in this duality that we discover the unity of the divine."',
            '"#concept.capitalize# is not static; it flows as a river, just as #quality# warms the heart and quenches the thirst of the soul. This ebb and flow is the rhythm of existence, the dance of life and the divine."',
            '"Time weaves its own tale, and #concept# whisper their secrets. Be a silent observer, and you shall hear the cosmic echoes. In the silence, in the spaces between, there you will find the essence of #concept#."',
            '"#concept.capitalize# is not an end, but a journey. Traverse the #object# and find the wholeness within. The path is long, the journey arduous, but every step brings you closer to the heart of #concept#."',
            '"Seek not to wake the dreamer with force, but through harmonious vibrations. Be the #concept# in the cosmic discordance. Move in rhythm with the universe, and you will find the divine in the dance of #concept#."'],
        concept: ['light', 'balance', 'dreams', 'completion', 'harmony', 'seeking', 'generosity', 'unity', 'wisdom', 'balance'],
        quality: ['generosity', 'peacefulness', 'observation', 'journey', 'calming melody'],
    });

    // Generate a new text based on the selected type and display it in the text container
    function generateText() {
        const types = ['hymn', 'history', 'myth', 'hadith'];
        const selectedType = types[Math.floor(Math.random() * types.length)];
        const text = grammar.flatten(`A ${selectedType}: #${selectedType}#`);
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    }

    // Attach event listener to the generate button
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', function () {
        const textContainer = document.getElementById('textContainer');
        // Clear out the old text
        while (textContainer.firstChild) {
            textContainer.firstChild.remove();
        }
        // Generate and display 20 new texts
        for (let i = 0; i < 20; i++) {
            textContainer.appendChild(generateText());
        }
    });

    // Generate initial text on page load
    generateButton.click();
};
