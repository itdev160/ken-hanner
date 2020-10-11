(function() {
            //package data array
    var data = [
        {
            name: 'Settings Sync',
            description: 'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads: 2011589,
            stars: 638,
            price: 'Free',
            selector: 'p1',
        },
        {
            name: 'Shopify Liquid Template Snippets',
            description: 'This extension for Visual Studio Code adds snippets for Shopify Liquid Template.',
            author: 'Franky Lau',
            url: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets',
            downloads: 43416,
            stars: 1,
            price: 'Free',
            selector: 'p2'
        },
        {
            name: 'Trailing Spaces',
            description: 'Highlight trailing spaces and delete them in a flash!',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: 492400,
            stars: 34,
            price: 'Free',
            selector: 'p3'
        }
    ];

            //Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector; //add this if you added it to the data objects

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

            //utility functions
    //today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    //returns DOM element by id
    var getEl = function (id) {
        return document.getElementById(id);
    }

    //write package objects data
    var writePackageInfo = function(package) {
            //get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description');
            authEl = getEl(selector + '-author');
            downloadEl = getEl(selector + '-downloads')
            starsEl = getEl(selector + '-stars');
    
    //write package data to DOM elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }

//utilize package data and constructor objects to construct the packages
//add package data via DOM functions

//write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

//write package info
    var p1 = new Package(data[0]);
    writePackageInfo(p1);

    var p2 = new Package(data[1]);
    writePackageInfo(p2);

    var p3 = new Package(data[2]);
    writePackageInfo(p3);

    //loop
//    for (var i = 0; i < data.length; i++) {
//        var package = new Package(data[i]);
//        writePackageInfo(package);
//    }

}())