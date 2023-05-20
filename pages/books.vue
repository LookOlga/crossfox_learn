<template>
    <div class="page">
        <div class="page__section-heading">
                <Icon 
                  id="book-icon"
                  width="6"
                  height="6"
                  class="page__heading-icon"/>
                 <h2 class="page__title text-h2 font-weight-bold">Книги</h2>
            </div>
        <section>
            <div class="page__block">
            <h4 class="page__block-title">HTML & CSS</h4>
            <ul class="page__list">
                <li class="page__item">
                    <a href="https://learn.shayhowe.com/html-css/" target="_blank" class="page__item-link">Learn to Code HTML & CSS by Shay Howe</a>
                </li>
            </ul>
        </div>
         <div class="page__block">
            <h4 class="page__block-title">CSS</h4>
             <ul class="page__list">
                <li class="page__item">
                    <a href="https://adamschwartz.co/magic-of-css/" target="_blank" class="page__item-link">The Magic of CSS by Adam Schwartz</a>
                </li>
                <li class="page__item">
                    <a href="https://archive.org/details/beginningcsswebd0000coll/page/n9/mode/2up" target="_blank" class="page__item-link">Beginning CSS Web Development: From Novice to Professional by Simon Collison</a>
                </li>
                <li class="page__item">
                    <a href="https://css-tricks.com/books/greatest-css-tricks/" target="_blank" class="page__item-link">The Greatest CSS Tricks Vol. 1 by Chris Coyier</a>
                </li>
            </ul>
        </div>
         <div class="page__block">
            <h4 class="page__block-title">JavaScript</h4>
             <ul class="page__list">
                 <li class="page__item">
                   <a href="https://thevalleyofcode.com/download/js/" target="_blank" class="page__item-link">The JavaScript Beginner’s Handbook by Flavio Copes</a>
                </li>
                 <li class="page__item">
                   <a href="http://jsforcats.com/javascript-for-cats.pdf" target="_blank" class="page__item-link">JavaScript for Cats</a>
                </li>
                <li class="page__item">
                   <a href="https://eloquentjavascript.net/" target="_blank" class="page__item-link">Eloquent JavaScript by Marijn Haverbeke</a>
                </li>
                 <li class="page__item">
                    <a href="https://leanpub.com/understandinges6/read/" target="_blank" class="page__item-link">Understanding ECMAScript 6 by Nicholas C. Zakas</a>
                </li>
                <li class="page__item">
                    <a href="https://ebooks.humanwhocodes.com/promises" target="_blank" class="page__item-link">Understanding JavaScript Promises by Nicholas C. Zakas</a>
                </li>
                <li class="page__item">
                    <a href="http://speakingjs.com/es5/" target="_blank" class="page__item-link">Speaking JavaScript by Axel Rauschmayer</a>
                </li>
                <li class="page__item">
                    <a href="https://read.humanjavascript.com/" target="_blank" class="page__item-link">Human JavaScript by HenrikJoreteg</a>
                </li>
                <li class="page__item">
                    <a href="https://www.patterns.dev/posts/classic-design-patterns/" target="_blank" class="page__item-link">Learning JavaScript Design Patterns by Addy Osmani</a>
                </li>
                <li class="page__item">
                    <a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md/" target="_blank" class="page__item-link">You Don’t Know JS by Kyle Simpson</a>
                </li>
                <li class="page__item">
                    <a href="https://js4ds.org/" target="_blank" class="page__item-link">JavaScript for Data Science by Gans, Hodges & Wilson</a>
                </li>
            </ul>
        </div>
        <div class="page__block">
            <h4 class="page__block-title">React</h4>
             <ul class="page__list">
                 <li class="page__item">
                   <a href="https://thevalleyofcode.com/download/react/" target="_blank" class="page__item-link">The React Beginner's Handbook by Flavio Copes</a>
                </li>
                 <li class="page__item">
                   <a href="https://softchris.github.io/react-book/" target="_blank" class="page__item-link">React Book by Christoffer Noring</a>
                </li>
                <li class="page__item">
                   <a href="https://leanpub.com/reintroducing-react" target="_blank" class="page__item-link">Reintroducing React by Ohans Emmanuel</a>
                </li>
                <li class="page__item">
                    <a href="https://www.reactenlightenment.com/" target="_blank" class="page__item-link">React JS - React Enlightenment by Cody Lindley</a>
                </li>
            </ul>
        </div>
        <div class="page__block">
            <h4 class="page__block-title">Git</h4>
            <ul class="page__list">
                <li class="page__item">
                    <a href="https://www.git-tower.com/learn/git/ebook" target="_blank" class="page__item-link">Learn Version Control with Git by Tower</a>
                </li>
            </ul>
        </div>
        </section>
    </div>
</template>

<script>
import Icon from '~/components/Icons/Icon';
    export default {
        name: 'books-page',
        components: {
            Icon
        }
    }
</script>