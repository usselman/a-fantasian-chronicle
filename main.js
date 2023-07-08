// Create a Tracery grammar
window.onload = function () {
    const grammar = tracery.createGrammar({
        //hymn
        hymn: ['Sing #emotion#ly, for #entity#!', 'In #entity#, we find our #blessing#!', 'Praise the #entity#, the #quality# one!', '#greeting#, #greeting#, to the #entity#!'],
        greeting: ['Hosanna', 'Blessed be', 'Rejoice', 'In wisdom\'s wake'],
        emotion: ['joyful', 'exuberant', 'heavenly', 'harmonious'],
        entity: ['St. Elian', 'St. Alyra', 'St. Lucian', 'St. Meliora', 'St. Eosphoros', 'St. Talia', 'St. Raphael', 'St. Serene', 'St. Theodora', 'St. Uriel'],
        blessing: ['light', 'harmony', 'wisdom', 'completion', 'peace', 'guidance', 'generosity', 'unity', 'enlightenment', 'balance'],
        quality: ['enlightened', 'harmonious', 'watchful', 'fulfilled', 'peaceful', 'seeking', 'giving', 'united', 'wise', 'balanced'],
        //history
        history: ['In the age of #year#, #entity# #verb# #event#.', 'Remember when #entity# #verb# #event# in the time of #year#.', 'The annals of time recall #entity# and their #event# in the days of #year#.'],
        event: ['a spiritual awakening', 'the founding of an Order', 'a great revelation', 'the cosmic alignment'],
        year: ['the Great Eclipse', 'the Harmonic Concordance', 'the Dreamer\'s Epiphany', 'the Sephiratic Renaissance'],
        verb: ['ushered in', 'led to', 'gave birth to', 'marked'],
        //myth
        myth: ['Once, #entity# journeyed to the #object#. #detail#. This is the tale of #concept#.', 'In ancient days, #entity# #verb# the #object#. #detail#. Thus began the era of #concept#.'],
        object: ['Aeon Watch', 'Divine Completion', 'Sephiratic path', 'Cosmic Harmony', 'Dreamer\'s Wake', 'Illuminated Path', 'Assembly of Giving'],
        verb: ['discovered', 'mastered', 'traversed', 'founded', 'embraced', 'revealed', 'established'],
        detail: ['Their journey became our path', 'Their wisdom became our guide', 'Their revelation illuminated our world', 'Their harmony became our melody'],
        concept: ['enlightenment', 'harmony', 'watchfulness', 'completion', 'peacefulness', 'seeking', 'giving', 'unity', 'wisdom', 'balance'],
        //hadith
        hadith: ['"Seek not only #concept#, but understand its source. To truly know the divine, one must comprehend both #concept# and #quality#."',
            '"#concept.capitalize# is not static; it flows as a river, just as #quality# warms the heart and quenches the thirst of the soul."',
            '"Time weaves its own tale, and #concept# whisper their secrets. Be a silent observer, and you shall hear the cosmic echoes."',
            '"#concept.capitalize# is not an end, but a journey. Traverse the #object# and find the wholeness within."',
            '"Seek not to wake the dreamer with force, but through harmonious vibrations. Be the #concept# in the cosmic discordance."'],
        concept: ['light', 'balance', 'dreams', 'completion', 'harmony', 'seeking', 'generosity', 'unity', 'wisdom', 'balance'],
        quality: ['generosity', 'peacefulness', 'observation', 'journey', 'calming melody'],
    });

    // Generate a new text based on the selected type and display it in the text container
    function generateText() {
        const types = ['hymn', 'history', 'myth', 'hadith'];
        const selectedType = types[Math.floor(Math.random() * types.length)];
        const text = grammar.flatten(`A ${selectedType}: #${selectedType}#`);
        const textContainer = document.getElementById('textContainer');
        textContainer.textContent = `${text}`;
        console.log("Text: ", text);
    }

    // Attach event listener to the generate button
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateText);

    // Generate initial text on page load
    for (let i = 0; i < 20; i++) {
        generateText();
    }
};
