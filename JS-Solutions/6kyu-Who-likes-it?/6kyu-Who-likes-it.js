function likes(names){
    if(names.length === 0) return "no one likes this";
    if(names.length === 1) return `${names[0]} likes this`;
    if(names.length === 2) return `${names[0]} and ${names[1]} likes this`;
    if(names.length === 3) return `${names[0]} and ${names[1]} and ${names[2]} likes this`;
    return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;

}

//Alternative Solutions

function likes(names){
    names = names || [];
    switch(names.length){
        case 0: return 'no one likes this'; break;
        case 1: return `${names[0]} likes this`; break;
        case 2: return `${names[0]}  and ${names[1]} likes this`; break;
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
        default: return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`;
    }
}
