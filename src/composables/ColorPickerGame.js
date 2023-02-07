import {ref} from "@vue/reactivity";


const ColorPickerCompose = () => {
    const colors = ["green", "red", "blue", "purple", "yellow"];
    let message = ref("Pick a color...");

    const matchColor = (value) => {
        // indicate a random color base on the color aviable in the array
        const randomNumber = Math.floor(Math.random() * 4) + 1; 
        // between 1-5
        if(colors[randomNumber] === value) {
            message.value = `You win...[answer: ${colors[randomNumber]}]`;
            return;
        } else
        message.value = `You lose...[answer: ${colors[randomNumber]}]`;
    };
    return { colors, message, matchColor };

};
export default ColorPickerCompose;