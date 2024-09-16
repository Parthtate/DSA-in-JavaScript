// how to explain working of asyn, Non-blocking or Event Loop

const one = () => {
    console.log("One");
};

const two = () => {
    setTimeout(function(){
        console.log("Second");
    },5000)
};

const three = () => {
    console.log("Third");
};

two();
one();
three();