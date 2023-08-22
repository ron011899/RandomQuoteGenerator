function generateQuote(){
    const quotes = {
        "— Rosa Parks" : '"I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom."',
        "— Oscar Wilde" : '"To love oneself is the beginning of a lifelong romance."',
        "— Etty Hillesum" : '"Sometimes the most important thing in a whole day is the rest we take between two deep breaths."',
        "— Anne Lamott" : '"Almost everything will work again if you unplug it for a few minutes, including you."',
        "— Bell Hooks" : '"Knowing how to be solitary is central to the art of loving. When we can be alone, we can be with others without using them as a means of escape."',
        "— Unknown" : '"Time you enjoy wasting is not wasted time."',
        "— Lalah Delia" : '"Self-care is how you take your power back."',
        "— Lilly Pulitzer" : '"Being happy never goes out of style."',
        "— Maya Angelou" : '"You are the sum total of everything you have ever seen, heard, eaten, smelled, been told, forgot it is all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive."',
        "— Unknown" : '"Sometimes, when things are falling apart, they may actually be falling into place."',
        "— Naomi Judd" : '“A dead end is just a good place to turn around.”',
        "— The Fairy Godmother, Cinderella" : '“Even miracles take a little time.”',
        "— A.A. Milne" : '"You’re braver than you believe, and stronger than you seem, and smarter than you think."',
        "— Dolly Parton" : 'Find out who you are and do it on purpose."',
        "— Dolly Parton" : '“The way I see it, if you want the rainbow, you gotta put up with the rain!”',
        "— Reba McEntire" : '"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone."',
        "— Estée Lauder" : '“I never dreamed about success. I worked for it.”',
        "— Mark Twain" : '"All you need in this life is ignorance and confidence; then success is sure."',
        "— Barbara Bush" : '"Never lose sight of the fact that the most important yard stick to your success is how you treat other people."',
        "— Jon Bon Jovi" : '“Success is falling nine times and getting up ten.”',
    }

    let authors = Object.keys(quotes);
    
    let author  = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById("quoteText").innerHTML = quote;
    document.getElementById("authorName").innerHTML = author;
}
