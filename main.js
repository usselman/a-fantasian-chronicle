// Create a Tracery grammar
window.onload = function () {
    const grammar = tracery.createGrammar({
        //hymn
        hymn: ['#greeting#, #greeting#!', 'Sing #emotion#ly, #entity#!', 'Praise the #entity#!'],
        greeting: ['Hallelujah', 'Hosanna', 'Blessed be', 'Rejoice'],
        emotion: ['joyful', 'exuberant', 'heavenly'],
        entity: ['sun', 'divine', 'glory'],
        //history
        history: ['#event# happened in #year#, #event# in #year#, #event# in #year#.', 'Long ago, #event# occurred.'],
        event: ['a great battle', 'the rise of a kingdom', 'a major discovery', 'a catastrophic event'],
        year: ['100 BC', 'in ancient times', 'during the Renaissance', 'in the 21st century'],
        //myth
        myth: ['#story.capitalize#'],
        story: ['#subject# #verb# #object#.', 'The #entity# #verb# #subject# and #object#.'],
        subject: ['gods', 'heroes', 'titans', 'dragons'],
        verb: ['created', 'fought', 'ruled', 'brought', 'slew'],
        object: ['world', 'balance', 'harmony', 'prosperity'],
    });

    // Generate a new text based on the selected type and display it in the text container
    function generateText() {
        const types = ['hymn', 'history', 'myth'];
        const selectedType = types[Math.floor(Math.random() * types.length)];
        const text = grammar.flatten(`A ${selectedType}: #${selectedType}#`);
        const textContainer = document.getElementById('textContainer');
        textContainer.textContent = text;
    }

    // Attach event listener to the generate button
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', generateText);

    // Generate initial text on page load
    generateText();
};
