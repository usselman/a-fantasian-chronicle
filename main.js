let numEntries = getRandomInt(1);

const grammar = tracery.createGrammar({
    history: [
        'In the era of #year#, #entity# #verb# #event#. This #event.capitalize# was a beacon of #concept#, altering the threads of fate and belief. #template1#.',
        'Recall the epoch when #entity# #verb# #event# under the veil of #year#. It heralded an age of #blessing#, drawing souls closer to the enigma of #concept#. #template2#',
        'Chronicles speak of #entity#, their deeds in #event# during #year#. It was a time suffused with #concept#, where the wisdom of #entity# became our guiding #blessing#. #template3#'
    ],
    template1: [
        'Amidst #event#, #hero# #verb# #object#. The #group# at #place# witnessed #hero#s deeds and echoed their call to #concept#.And thus, #hero# proclaimed: #quote#'
    ],
    template2: [
        'In the year #year#, #hero# #verb# #object#. The #group# at #place#, drawn by #hero#s charisma, embraced the essence of #concept#.#hero# then spoke thus: #quote#'
    ],
    template3: [
        'As #hero.capitalize# #verb# #object#, so did the #group# at #place# transform into #concept#. In their words: #quote#'
    ],
    event: [
        'the Binding of the Seraphim', 'the Oracle’s Decree', 'the Shattering of the Veil', 'the Alignment of the Celestial Spheres'
    ],
    year: [
        'the Epoch of Whispered Prophecies', 'the Dawn of the Crimson Moon', 'the Age of the Enlightened Seer', 'the Time of the Astral Awakening'
    ],
    verb: [
        'foretold', 'unearthed', 'transcended', 'consecrated', 'bestowed grace upon', 'unveiled', 'conjured', 'awakened', 'illuminated', 'transformed'
    ],
    hero: [
        'Elijah the Prophet', 'Alyra the Mystic', 'The Silent Pilgrim', 'Lucius the Lightbringer', 'Harmonius the Ageless', 'Unity’s Herald', 'Seraphina the Star-eyed', 'The Spirit Awakener', 'Ephraim the Balanced', 'The Truth Seeker'
    ],
    group: [
        'the Brotherhood of the Sacred Light', 'the Order of Divine Harmony', 'the Keepers of the Astral Seal', 'the Guardians of the Eternal Flame', 'the Fellowship of the Celestial Path', 'the Disciples of the Hidden Truth'
    ],
    place: [
        'the Sanctuary of Forgotten Whispers', 'the Luminous Citadel', 'the Grove of Cosmic Revelation', 'the Halls of Eternal Balance', 'Mount Seraphim', 'the Crystal Chamber of Insight'
    ],
    concept: [
        'ethereal wisdom', 'divine harmony', 'cosmic enlightenment', 'the unity of souls', 'the serenity of the cosmos', 'the spirit’s awakening', 'the balance of the ages', 'the eternal truth'
    ],
    quote: [
        '"In the heart of chaos lies the seed of serenity; in the shadow of doubt, the light of truth."'
    ],
    object: [
        'the Codex of Celestial Mysteries', 'the Chalice of Endless Light', 'the Scroll of Ancient Wisdom', 'the Crystal of Harmonic Resonance', 'the Dreamer’s Lantern', 'the Tome of Astral Prophecies'
    ],
    hymn: [
        'Chant with reverence for #entity#. Blessings upon #entity#, the bringer of #emotion# and the harbinger of #concept#.'
    ],
    greeting: [
        'salutations of light', 'blessed be', 'rejoice in wisdom', 'sanctus', 'gloria in excelsis', 'peace be upon'
    ],
    emotion: [
        'celestial joy', 'profound ecstasy', 'divine peace', 'harmonious serenity'
    ],
    entity: [
        'Elijah the Enlightened', 'Alyra of the Veil', 'The Silent Pilgrim', 'Lucius, Bearer of Light', 'Harmonius, Keeper of the Ages', 'The Herald of Unity', 'Seraphina of the Stars', 'The Awakened Spirit', 'Ephraim the Equalizer', 'The Seeker'
    ],
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
    for (let i = 0; i < numEntries; i++) {
        let textElements = generateText();
        textContainer.appendChild(textElements[0]);
        textContainer.appendChild(textElements[1]);
    }
}


const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', refreshText);
generateButton.click();

//refreshText();
//generateText();

// // Generate initial text on page load
//generateButton.window.location.reload();