interface IFilterStrategy {
    filter(image: string): void;
}

class BlackAndWhiteFilter implements IFilterStrategy {
    filter(image: string): void {
        console.log('Apply black and white filter', image);
    }
}

class SepiaFilter implements IFilterStrategy {
    filter(image: string): void {
        console.log('Apply sepia filter', image);
    }
}

class ColorFilter implements IFilterStrategy {  
    filter(image: string): void {
        console.log('Apply color filter', image);
    }   
}


class ImageProcessor {

    constructor(
        private filterStrategy: IFilterStrategy
    ) {}

    setFilterStrategy(filterStrategy: IFilterStrategy) {
        this.filterStrategy = filterStrategy;
    }

    applyFilter(image: string) {
        this.filterStrategy.filter(image);
    }


}



// client code
let imageProcessor = new ImageProcessor(new BlackAndWhiteFilter());
imageProcessor.applyFilter('image1.png');

imageProcessor.setFilterStrategy(new SepiaFilter());
imageProcessor.applyFilter('image2.jpg');

imageProcessor.setFilterStrategy(new ColorFilter());
imageProcessor.applyFilter('image3.svg');



