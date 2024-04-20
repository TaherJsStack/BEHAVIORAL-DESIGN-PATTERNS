abstract class CakeRecipe {

    public bakeCake(): void {
        this.preHeatOven();
        this.prepare();
        this.bake();
        this.coolingDown();
        this.decorate();
    }

    protected preHeatOven(): void {
        console.log('Preheating oven for 20 minutes at the oven...');
    }

    protected bake(): void {
        console.log('Baking the cake...');
    }

    protected coolingDown(): void {
        console.log('Cooling down the cake...');
    }

    protected decorate(): void {
        console.log('Decorating the cake...');
    }

    protected abstract prepare(): void;

}


class ChocolateCake extends CakeRecipe {
    protected prepare(): void {
        console.log('Preparing ChocolateCake... [ chocolate, sugar, butter, ...obj ]');
    }

    protected decorate(): void {
        console.log('Decorating the cake with chocolate...');    
    }
}


class VanillaCake extends CakeRecipe {
    protected prepare(): void {
        console.log('Preparing VanillaCake... [ Vanilla, sugar, butter, ...obj ]');
    }

    protected decorate(): void {
        console.log('Decorating the cake with vanilla...');
    }
}


// client code
// let chocolateCake = new ChocolateCake();
// chocolateCake.bakeCake(); 

// let vanillaCake = new VanillaCake();
// vanillaCake.bakeCake();


function bakeCake(cake: CakeRecipe): void {
    cake.bakeCake();
}

// bakeCake(new ChocolateCake());
bakeCake(new VanillaCake());









