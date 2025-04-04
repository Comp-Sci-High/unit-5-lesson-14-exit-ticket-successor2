// Create and call a function that tests your update route handler [2 pts]
// Make sure that the function takes the name of the potion as a parameter
// There are already potion's with the label polyjuice or amortentia
console.log("Script running...")

const base = "https://scaling-carnival-gj79j44vpqpfwq5g-3000.app.github.dev"

async function patchCreature(label) {
    try {
        // fill in the path
        const response = await fetch(base + "/update/" + label, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                color: "black",
            })

        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
patchLabel("potion")
