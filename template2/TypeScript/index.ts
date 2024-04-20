
abstract class DataParser {

    public parseData(data: string): void{
        this.loadData(data);
        this.validateData(data);
        this.parse(data);
        this.useData(data);
    };

    protected loadData(data: string): void {
        console.log('load data', data);
    }

    protected validateData(data: string): void {
        console.log('validate data', data);
    }

    protected useData(data: string): void {
        console.log('use data', data);
    }

    protected abstract parse(data: string): void;

}

class JsonDataParser extends DataParser {

    protected parse(data: string): void {
        console.log('parse json data', data);
    }

}

class XmlDataParser extends DataParser {    
    protected parse(data: string): void {
        console.log('parse xml data', data);
    }    
}


// client code

let jsonDataParser = new JsonDataParser();

jsonDataParser.parseData('{"name": "John", "age": 30}');

let xmlDataParser = new XmlDataParser();
xmlDataParser.parseData('<person><name>John</name><age>30</age></person>');