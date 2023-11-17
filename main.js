const grammar = tracery.createGrammar({
    history: ['#template1#', '#template2#', '#template3#', 'In the age of #year#, #entity# #verb# #event#. #event.capitalize# was #concept.a#, changing the course of our understanding of #concept#.',
        'Remember when #entity# #verb# #event# in the time of #year#. This marked a time of great #blessing#, bringing us closer to the #concept#.',
        'The annals of time recall #entity# and their #event# in the days of #year#. It was an era of #concept#, and the teachings of #entity# became our #blessing#.'],
    template1: ['When #event#, #hero# #verb# #object#. The #group# at #place# came out to #hero# and #verb# #concept#. And #hero# said #quote#'],
    template2: ['In the year #year#, #hero# #verb# #object#. The #group# at #place# came out to #hero# and #verb# #concept#. And #hero# said #quote#'],
    template3: ['#hero.capitalize# #verb# #object#. The #group# at #place# became #concept#. And #hero# said #quote#'],
    event: ['<span class="event">a spiritual awakening</span>', '<span class="event">the founding of an Order</span>', '<span class="event">a great revelation</span>', '<span class="event">the cosmic alignment</span>'],
    year: ['<span class="event">the Great Eclipse</span>', '<span class="event">the Harmonic Concordance</span>', '<span class="event">the Dreamer\'s Epiphany</span>', '<span class="event">the Sephiratic Renaissance</span>'],
    verb: ['ushered in', 'seek', 'eliminate', 'desecrate', 'give praise', 'led to', 'gave birth to', 'marked', 'enveloped', 'became', 'opened', 'revealed', 'brought', 'developed', 'enumerated', 'manifested', 'innervated', 'projected'],
    hero: ['<span class="hero">Sanctus Elian</span>', '<span class="hero">Sancta Alyra</span>', '<span class="hero">Somniantem Silentem</span>', '<span class="hero">Lucem Ducem</span>', '<span class="hero">Harmoniam Aeternam</span>', '<span class="hero">Unitatem Divinam</span>', '<span class="hero">Serenitatem Cosmicam</span>', '<span class="hero">Spiritus Excitantem</span>', '<span class="hero">Equilibratus</span>', '<span class="hero">Veritatis Quaerentem</span>', '<span class="hero">St. Elian</span>', '<span class="hero">St. Alyra</span>', 'the Silent Dreamer', 'the Guiding Light', 'the Eternal Harmony', 'the Divine Unity', 'the Cosmic Serenity', 'the Awakening Spirit', 'the Balanced One', 'the Seeker of Truth'],
    group: ['the Order of the Dreamer', 'the Order of the Light', 'the Order of the Harmony', 'the Order of the Unity', 'the Order of the Serenity', 'the Order of the Spirit', 'the Order of the Balance', 'the Order of the Truth'],
    place: ['the Temple of the Dreamer', 'the Palace of the Light', 'the Harmonic Village', 'the Temple of the Unity', 'Mt. Serenity', 'the Temple of the Spirit', 'the Balance', 'The Library of Truth'],
    concept: ['the Dreamer', 'the Light', 'the Harmony', 'the Unity', 'the Serenity', 'the Spirit', 'the Balance', 'the Truth'],
    quote: ['"The #concept# is the #event# of the #group#."'],
    object: ['the Aeon Watch', 'the Divine Completion', 'the Sephiratic Path', 'the Cosmic Harmony', 'the Dreamer\'s Wake', 'the Illuminated Path', 'the Assembly of Giving'],
    hymn: ['Sing with #emotion#, for #entity#! Praise be to #entity#, the #quality# #emotion# #verb# the #path#!',
        'In #entity#, we #verb# our #blessing#. As the #entity# #verb# our way, we #verb# #concept# into the realm of #concept#!',
        'We #verb# #greeting# to the #entity#, for #entity# is the #emotion# of the #arcaneTerm#!',
        'Praise the #entity#, the #quality# one! #entity#, who offers #blessing#, #verb# us towards the #emotion# of #concept#!',
        '#greeting.capitalize#, #greeting#, to the #entity#! For in the #entity#, we find the touch of #concept#, and therein lies our #blessing#! #theological.capitalize#',
        '#entity.capitalize# has revealed the #arcaneTerm#, and in its #mystery# we find the #lesson#.'],
    greeting: ['hosanna', 'blessed be', 'rejoice', 'in wisdom\'s wake', 'benedictus', 'gaudete', 'in sapientiae vigilia'],
    emotion: ['joyful', 'exuberant', 'heavenly', 'harmonious'],
    entity: ['Sanctus Elian', 'Sancta Alyra', 'Somniantem', 'Silentem', 'Lucem the Great', 'Harmoniam', 'Unitatem', 'Serenitatem', 'Spiritus Excitantem', 'Equilibratus', 'Veritatis', 'Quaerentem', 'St. Elian', 'St. Alyra', 'the Silent Dreamer', 'the Guiding Light', 'the Eternal Harmony', 'the Divine Unity', 'the Cosmic Serenity', 'the Awakening Spirit', 'the Balanced One', 'the Seeker of Truth'],
    blessing: ['lux', 'harmonia', 'sapientia', 'consummatio', 'pax', 'ducatio', 'generositas', 'unitas', 'illuminatio', 'equilibrium', 'light', 'harmony', 'wisdom', 'completion', 'peace', 'guidance', 'generosity', 'unity', 'enlightenment', 'balance'],
    path: ['Vigilia Aeonis', 'Divinum Itiner', 'Semitam Sephiraticam', 'Harmoniam Cosmicam', 'Itiner Somniatoris', 'Semitam Illuminatam', 'Voyage Unitatis', 'Aeon Watch', 'Path of the Divine', 'Sephiratic Path', 'Cosmic Harmony', 'Dreamer\'s Journey', 'Illuminated Path', 'Unity\'s Voyage'],
    concept: ['illuminatio', 'harmonia', 'vigilantia', 'consummatio', 'tranquillitas', 'quaestio', 'donum', 'unitas', 'sapientia', 'equilibrium', 'enlightenment', 'harmony', 'watchfulness', 'completion', 'peacefulness', 'seeking', 'giving', 'unity', 'pain', 'longing', 'wisdom', 'balance', '#path#'],
    lesson: ['#wisdom#', '#paradox#', '#journey#', '#theological.capitalize#'],
    arcaneTerm: ['Arcanum Aeonis', 'Mysterium Divinum', 'Revelatio Cosmica', 'Visio Sapientiae', 'Harmonia Universalis', 'Equilibrium Aeternum'],
    mystery: ['enigma', 'paradoxon', 'mysterium', 'aenigma', 'profound mystery', 'holy mystery'],
    wisdom: ['In #concept#, we find our true selves', 'The essence of #entity# is the key to our inner peace, #greeting.capitalize#', 'Through #concept#, we transcend earthly limitations', 'In the heart of #concept#, lies the seed of divine wisdom'],
    paradox: ['To seek #concept# is to realize that we have already found it', 'In the silence of #concept#, we hear the universe\'s song', 'In the emptiness of #concept#, we find abundant fulfillment'],
    journey: ['Our journey to #concept# is a #blessing# of the soul', 'The #object# to #concept# is a #object# of the spirit.', 'The pursuit of #concept# is a pilgrimage of the heart', 'Our voyage to #concept# is the greatest #object# of the #concept#'],
    //history
    event: ['a spiritual awakening', 'the founding of an Order', 'a great revelation', 'the cosmic alignment', 'the #year#'],
    year: ['the Great Eclipse', 'the Harmonic Concordance', 'the Dreamer\'s Epiphany', 'the Sephiratic Renaissance'],
    //myth
    myth: ['Once, #entity#, filled with #concept#, #verb# to #hero# that the #detail#. #object.capitalize# was #concept#, the essence of #concept#, #greeting#. #theological.capitalize#',
        'In #year.capitalize#, #entity# #verb# the #object#. #detail#. Their #concept# #verb# across #object#, #verb# the #object# of #concept#. And so began the year of #year#.'],
    object: ['Aeon Watch', 'Divine Completion', 'Sephiratic path', 'Cosmic Harmony', 'Dreamer\'s Wake', 'Illuminated Path', 'Assembly of Giving'],
    verb: ['discovered', 'relished', 'devoured', 'obscured', 'mastered', 'traversed', 'founded', 'embraced', 'revealed', 'established'],
    detail: ['Their journey became our path', '#theological#', 'Their wisdom became our guide', 'Their revelation illuminated our world', 'Their harmony became our melody'],
    concept: ['enlightenment', 'harmony', 'watchfulness', 'completion', 'peacefulness', 'seeking', 'giving', 'unity', 'wisdom', 'balance'],
    //hadith
    hadith: ['"Seek not only #concept#, but understand its source. To truly #verb# the divine, one must comprehend both #concept# and #quality#. It is in this #concept# that we discover the #object# of the #entity#."',
        '"#concept.capitalize# is not #concept#; it flows as a river, just as #quality# warms the heart and #verb# the #concept# of the soul. This ebb and flow is the rhythm of existence, the dance of life and the divine."',
        '"Time weaves its own tale, and #concept# whisper their secrets. Be a silent observer, and you shall hear the cosmic echoes. In the silence, in the spaces between, there you will find the essence of #concept#."',
        '"#concept.capitalize# is not an end, but a journey. Traverse the #object# and find the wisdom of #entity#. The path is long, the journey arduous, but every step brings you closer to the heart of #concept#."',
        '"Seek not to wake the dreamer with force, but through harmonious vibrations. Be the #concept# in the cosmic discordance. Move in rhythm with the universe, and you will find the divine in the dance of #concept#."'],
    concept: ['light', 'balance', 'dreams', 'completion', 'harmony', 'seeking', 'generosity', 'unity', 'wisdom', 'balance'],
    quality: ['generosity', 'peacefulness', 'observation', 'journey', 'calming melody'],
    theological: ['In the realm of #entity#, there exists a #concept#. It resonates with the #ancientTerm#, bringing forth the divine essence of #concept#',
        '#entity.capitalize# beholds the #concept#, an echo of the divine #ancientTerm#. In this revelation, we find our path to #concept#, the holy #concept#.',
        'Let us dwell in the #concept# of #entity#, a realm where the divine #ancientTerm# resonates with the harmonious dance of #concept#.'],
    ancientTerm: ['Aletheia', 'Sophia', 'Agape', 'Eudaimonia', 'Anamnesis', 'Mysterium Magnum', 'Pleroma', 'Emanatio', 'Shekinah', 'Tiferet'],
});

// Generate a new text based on the selected type and display it in the text container

function generateText() {
    console.log("This method has been called!");
    const types = ['history', 'hymn', 'hadith', 'myth', 'theological'];
    let selectedType = types[Math.floor(Math.random() * types.length)];
    const head = document.createElement('h2');
    let selectedTypeAfter = selectedType === 'theological' ? 'A theological treatise' : selectedType;
    const text = grammar.flatten(`#${selectedType}#`);
    const p = document.createElement('p');
    head.textContent = `${selectedTypeAfter.toUpperCase()}, pg ${getRandomInt(1000)}`;
    p.innerHTML = `${text}`; // Changed from p.textContent
    return [head, p];
}
function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function refreshText() {
    const textContainer = document.getElementById('textContainer');
    // Clear out the old text
    while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
    }
    // Generate and display new texts
    let textElements = generateText();
    textContainer.appendChild(textElements[0]);
    textContainer.appendChild(textElements[1]);
}

// Attach event listener to the generate button
let numEntries = getRandomInt(2);
const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', refreshText);
generateButton.click();

//refreshText();
//generateText();

// // Generate initial text on page load
//generateButton.window.location.reload();