<template>
    <h1>四分位距計算機</h1>
    <textarea
        name="input"
        id="input"
        cols="30"
        rows="10"
        v-model="textInput"
        placeholder="輸入數字以空格隔開"
        @keyup.enter="calculate()"
    ></textarea>
    <div class="control">
        <button @click="calculate()">計算</button>
        <button @click="this.textInput = ''">清除</button>
    </div>
    <div class="results">
        <ul>
            <li v-for="index in results" :key="index">
                <h1>{{ index[0] }}</h1>
                <p>{{ index[1] }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'tool',
    data() {
        return {
            textInput: '',
            results: {
                q1: ['Q1', 0],
                q2: ['中位數', 0],
                q3: ['Q3', 0],
                allRange: ['全距', 0],
                interquartile: ['四分位距', 0]
            }
        }
    },
    methods: {
        calculate() {
            let text = this.textInput.split(' ');
            for (let i = 0; i < text.length; i++) {
                if (text[i] === '') {
                    text.splice(i, 1);
                    i--;
                }else{
                    text[i] = parseInt(text[i], 10);
                }
            }
            text.sort((a, b) => { return a - b });
            // console.log(text);
            if(text.length < 4) {
                alert("請輸入4個以上的數");
                return false;
            }
            if (text.length === 0) return false;
            if (text.length % 4 === 0) {
                this.results.q1[1] = (text[text.length / 4 - 1] + text[text.length / 4]) / 2;
                this.results.q2[1] = (text[text.length / 2 - 1] + text[text.length / 2]) / 2;
                this.results.q3[1] = (text[text.length / 4 * 3 - 1] + text[text.length / 4 * 3]) / 2;
                this.results.interquartile[1] = this.results.q3[1] - this.results.q1[1];
                this.results.allRange[1] = text[text.length - 1] - text[0];

            } else if (text.length % 2 === 0) {
                this.results.q1[1] = text[Math.ceil(text.length / 4)];
                this.results.q2[1] = (text[text.length / 2 - 1] + text[text.length / 2]) / 2;
                this.results.q3[1] = text[Math.ceil(text.length * 3 / 4)];
                this.results.allRange[1] = this.results.q3[1] - this.results.q1[1];
                this.results.interquartile[1] = text[text.length - 1] - text[0];
            } else {
                this.results.q1[1] = text[Math.ceil(text.length / 4)];
                this.results.q2[1] = text[Math.ceil(text.length / 2)];
                this.results.q3[1] = text[Math.ceil(text.length * 3 / 4)];
                this.results.interquartile[1] = this.results.q3[1] - this.results.q1[1];
                this.results.allRange[1] = text[text.length - 1] - text[0];
            }
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 5px;
    color: #282828;
}
textarea {
    resize: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 10px 8px;
    font-size: 1rem;
    color: #282828;
    outline: none;
    transition: 0.3s;
    max-width: 85vw;
    margin-bottom: 10px;
}
textarea:focus {
    border: 1px solid #00ffa2;
}
button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 3px 20px;
    background-color: #2d7ef8;
    font-size: 1.1rem;
    font-weight: 100;
    color: #ffffff;
    margin-bottom: 15px;
}
button:not(:last-child) {
    margin-right: 15px;
}
.results > ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #8f8f8f;
    padding: 0 10px;
    border-radius: 5px;
}

.results > ul > li {
    padding-bottom: 3px;
}

.results > ul > li:not(:last-child) {
    margin-right: 10px;
    border-right: 1px solid #8f8f8f;
    padding-right: 10px;
}
.results > ul > li > h1 {
    font-size: 1rem;
    color: #8f8f8f;
}
@media screen and (max-width: 350px) {
    .results > ul > li > h1 {
        font-size: 0.8rem;
    }
}
</style>