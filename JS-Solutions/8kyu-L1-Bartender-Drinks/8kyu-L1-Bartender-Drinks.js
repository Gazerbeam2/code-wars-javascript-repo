function getDrinkByProfession(param){
    switch(param.toUpperCase()){
        case 'JABRONI':
        return "Patron Tequila";
        break;
        case "SCHOOL COUNSELOR":
        return "Anything with Alcohol"
        break;
        case "PROGRAMMER":
        return "Hipster Craft Beer"
        break;
        case "BIKE GANG MEMBER":
        return "Moonshine"
        break;
        case "POLITICIAN":
        return "Your tax dollars"
        break;
        case "RAPPER":
        return "Cristal"
        default :
        return "Beer"
    }

  }
