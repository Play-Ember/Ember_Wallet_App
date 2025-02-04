"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PrismaClient = require('@prisma/client');
var prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //createUser('ppli', true)
            findUsers();
            return [2 /*return*/];
        });
    });
}
//USERS
/* interface User {
    name: string
    createdAt: number
} */
var createUser = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.user.create({
                    data: {
                        name: name
                    }
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var findUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.user.findMany()];
            case 1:
                users = _a.sent();
                console.log(users);
                return [2 /*return*/];
        }
    });
}); };
createUser("elsa");
/*
  const deleteUser = async (id: number) => {
    await prisma.user.delete({
      where:{id:id}
    })
  }
  
  const updateUser = async (user: User, id:number) => {
    await prisma.user.update({
      where: {id:id},
      data: user
    })
  }

export const updateUsername = async (user: User, id:number) => {
await prisma.user.update({
    where: {id:id},
    data: user
})
}
//a fonction that updates the users hasWallet to true
export const updatetoHasWallet = async (id:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {hasWallet:true}
    })
}

// a function that updates the users wallet address
export const updateWallet = async (id:number, wallet:string) => {
    await prisma.user.update({
        where: {id:id},
        data: {wallet:wallet}
    })
}

// a function that updates the users earnedTokens
export const updateEarnedTokens = async (id:number, earnedTokens:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {earnedTokens:earnedTokens}
    })
}

// a function that updates the users spentTokens
export const updateSpentTokens = async (id:number, spentTokens:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {spentTokens:spentTokens}
    })
}

// a function that updates the users balance
export const updateBalance = async (id:number, balance:number) => {
    await prisma.user.update({
        where: {id:id},
        data: {balance:balance}
    })
}

// a function that updates the users playedGames
export const updatePlayedGames = async (id:number, playedGames:[]) => {
    await prisma.user.update({
        where: {id:id},
        data: {}
    })
}


 // GAME
 const createGame = async (title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
     const game = await prisma.game.create({
         data: {
             title,
             subtitle,
             coverImage,
             smallImage,
             topGame,
             type,
             subtype
         }
     })
     console.log(game)
    }
 
 const findGames = async () => {
     const games = await prisma.game.findMany()
     console.log(games)
 }
 
 const findOneGame = async (id: number) => {
     const game = await prisma.game.findUnique({
         where: {
             id
         }
     })
     console.log(game)
    }

//

 const updateGame = async (id: number, title: string, subtitle: string, coverImage: string, smallImage: string, topGame: boolean, type: string, subtype: string) => {
     const game = await prisma.game.update({
         where: {
             id
         },
         data: {
             title,
             subtitle,
             coverImage,
             smallImage,
             topGame,
             type,
             subtype
         }
     })
     console.log(game)
    }
 
 const deleteGame = async (id: number) => {
     const game = await prisma.game.delete({
         where: {
             id
         }
     })
     console.log(game)
    }

main()
   .then(async () => await prisma.$disconnect())
    .catch((e) => {
        throw e
    }
    )
 */ 
//# sourceMappingURL=Users_Api.js.map