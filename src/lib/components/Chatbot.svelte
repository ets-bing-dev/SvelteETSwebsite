<script>
    //tracks whether the chat window is open or closed
    let isOpen = false;

    //array that stores messages in that chat
    //each message is an object with a role and text
    let messages = [
        {
            role: 'assistant', 
            text: "Hello! How can I assist you today?"
        },
    ];

    //whatever the user is typing
    let userInput = '';

    //runs when the user clicks send or presses enter
    async function sendMessage() {
        //if the input is empty the function stops
        if (userInput.trim() === '') return;

        //save what the user typed before clearing the input box
        const currentMessage = userInput;

        //add the user's message first
        messages = [
            ...messages,
            {
                role: 'user',
                text: currentMessage
            }
        ];

        //clear input box after sending
        userInput = '';

        //send the user's message to our backend route
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: currentMessage
            })
        });

        //turn the backend response into usable JavaScript data
        const data = await response.json();
        console.log(data);

        //add the backend's reply as an assistant message
        messages = [
            ...messages,
            {
                role: 'assistant',
                text: data.reply
            }
        ];
    }
</script>

{#if isOpen}
    <div class="fixed bottom-6 right-6 w-72 rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden z-50">
        <div class="bg-black text-white px-4 py-3 font-bold flex justify-between items-center">
            <span>Ask ETS</span>

            <button 
                class="text-white text-xl leading-none"
                on:click={() => (isOpen = false)}
            >
                ×
            </button>
        </div>

        <div class="h-64 overflow-y-auto p-4 space-y-3">
            {#each messages as message}
                <div class={message.role === 'user' ? 'text-right' : 'text-left'}>
                    <div
                        class={
                            message.role === 'user'
                                ? 'inline-block rounded-xl px-3 py-2 text-sm bg-black text-white'
                                : 'inline-block rounded-xl px-3 py-2 text-sm bg-gray-100 text-black'
                        }
                    >
                        {@html message.text}
                    </div>
                </div>
            {/each}
        </div>

        <div class="flex gap-2 border-t border-gray-200 p-3">
            <input
                class="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-2 text-sm"
                bind:value={userInput}
                placeholder="Ask ETS..."
                on:keydown={(e) => {
                    if (e.key === 'Enter') sendMessage();
                }}
            />

            <button
                class="bg-black text-white rounded-lg px-3 py-2 text-sm"
                on:click={sendMessage}
            >
                Send
            </button>
        </div>
    </div>
{:else}
    <button
        class="fixed bottom-6 right-6 bg-black text-white rounded-full px-5 py-3 shadow-xl z-50 font-bold"
        on:click={() => (isOpen = true)}
    >
        Ask ETS
    </button>
{/if}