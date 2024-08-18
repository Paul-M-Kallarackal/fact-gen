class FactGenerator {
    constructor(seed) {
        this.facts = [
            "Did you know that a group of flamingos is called a 'flamboyance'? Talk about fabulous!",
            "Bananas are berries, but strawberries aren't. Mind. Blown.",
            "The inventor of the frisbee was turned into a frisbee after he died. Now that's what I call dedication to your craft!",
            "Cows have best friends and get stressed when they're separated. Moo-ving, isn't it?",
            "The Spanish national anthem has no words.",
            "A bolt of lightning is five times hotter than the sun. That's one spicy sky noodle!",
            "The longest English word without a vowel is 'rhythms'. Try saying that five times fast!",
            "In Japan, there's a Crying Sumo competition where wrestlers compete to see who can make a baby cry first. And you thought your job was weird.",
            "The Hawaiian alphabet only has 13 letters. Imagine how quick their spelling bees must be!",
            "A shrimp's heart is in its head. Talk about being a bit top-heavy!",
            "The fingerprints of koalas are virtually indistinguishable from human fingerprints. CSI: Eucalyptus, anyone?",
            "The world's largest desert is Antarctica. Bet you didn't see that coming, did ya?",
            "A group of pugs is called a 'grumble'. How adorably grumpy!",
            "The longest word in the English language without a vowel is 'rhythms'. Try saying that five times fast!",
            "Octopuses have three hearts. They're basically walking (or swimming) Valentine's Day cards!",
            "The platypus doesn't have a stomach. Evolution was clearly having an off day.",
            "In Switzerland, it's illegal to own just one guinea pig. They get lonely, you monster!",
            "A jiffy is an actual unit of time: 1/100th of a second. I'll be back in a jiffy! *disappears for 0.01 seconds*",
            "The inventor of the Hawaiian pizza was Greek and lived in Canada. Cultural fusion at its finest (or worst, depending on your stance on pineapple on pizza).",
            "Cats can't taste sweetness. No wonder they're so salty all the time!",
            "The longest tennis match lasted 11 hours and 5 minutes. That's longer than some people's relationships!",
            "A group of owls is called a 'parliament'. Guess they're pretty wise, huh?",
            "The original London Bridge is now in Arizona. Talk about a long-distance relationship!",
            "Astronauts can grow up to 2 inches taller in space. The ultimate growth spurt!",
            "The King of Hearts is the only king in a deck of cards without a mustache. Clean-shaven royalty, how progressive!",
            "A snail can sleep for three years. Now that's what I call a power nap!",
            "The longest word in the English language is 189,819 letters long. It's the chemical name for titin. Good luck fitting that on a name tag!",
            "Cherophobia is the fear of being happy. Talk about being a party pooper!",
            "The first oranges weren't orange. They were green. Orange you glad I told you that?",
            "A flock of crows is known as a murder. Who came up with these names? Edgar Allan Poe?",
            "The Eiffel Tower can grow up to 6 inches taller in the summer. It's not just you who feels a bit stretched in the heat!",
            "Polar bears' fur isn't actually white; it's transparent. They're basically walking optical illusions!",
            "The shortest commercial flight in the world is between two Scottish islands, lasting only 57 seconds. Blink and you'll miss it!",
            "The dot over the letter 'i' is called a tittle. Now that's a titillating fact!",
            "In Japan, letting a sumo wrestler make your baby cry is considered good luck. Different strokes for different folks, I guess!",
            "The Twitter bird's official name is Larry. Tweet tweet, Larry!",
            "Hippopotomonstrosesquippedaliophobia is the fear of long words. Whoever named that was clearly a sadist.",
            "The unicorn is the national animal of Scotland. Apparently, they take their fantasy very seriously!",
            "A group of pandas is called an embarrassment. How un-bear-ably cute!",
            "The only letter that doesn't appear on the periodic table is J. J must be feeling pretty left out.",
            "Cats have over 20 muscles in each ear. No wonder they're so good at ignoring us!",
            "There's a town in Norway called Hell. It freezes over quite often, actually.",
            "Banging your head against a wall burns 150 calories an hour. Not recommended as a weight loss technique, though!",
            "The longest place name in the world is 85 letters long. It's in New Zealand. Good luck fitting that on a postcard!",
            "Slugs have four noses. And you thought your allergies were bad!",
            "A group of rhinos is called a crash. Seems fitting, doesn't it?",
            "The only food that doesn't spoil is honey. It's the ultimate apocalypse survival food!",
        ]
    }

    fact() {
        const randomIndex = Math.floor(Math.random() * this.facts.length);
        return this.facts[randomIndex];
    }
}

module.exports = FactGenerator;