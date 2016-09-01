
module.exports={
    getApi:function(key){
 			return apiStore.getApiUrl(key);
 		}
	}

var apiStore={

	getApiUrl:function(key){
		return apiMap[key];
	}
}
var apiMap={
	"definition":"http://api.wordnik.com/v4/word.json/{word}/definitions?limit=1&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
	"examples":"http://api.wordnik.com:80/v4/word.json/{word}/examples?includeDuplicates=false&useCanonical=false&skip=0&limit={limit}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
	"synonyms":"http://api.wordnik.com:80/v4/word.json/{word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType={limit}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
	"antonyms":"http://api.wordnik.com:80/v4/word.json/{word}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType={limit}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    "dailyword":"http://api.wordnik.com:80/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
    "randomword":"http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
}

