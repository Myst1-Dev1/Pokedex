export type pokemonitem = {
    name: string,
    url: string
}

export type pokemonCharacter = {
    id: number,
    height: number,
    name: string,
    weight: number,
    order: number,
    sprites: {
        front_default: string,
        back_default: string,

       other: {
        dream_world: {
            front_default: string
        }
       }
    },
   types: {
    0: {
        type: {
            name: string,
        }
    }
   },
   abilities: {
    0: {
        ability: {
            name: string,
        }
    },
    1: {
        ability: {
            name: string
        }
    }
   }

}