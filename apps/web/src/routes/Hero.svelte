<script>
  import Icon from '@iconify/svelte'

  const logos = [
    {
      name: 'Svelte',
      url: 'https://kit.svelte.dev',
      image: '/logos/svelte.svg'
    },
    {
      name: 'Auth.js',
      url: 'https://authjs.dev',
      image: '/logos/authjs.png'
    },
    {
      name: 'Stripe',
      url: 'https://stripe.com',
      image: '/logos/stripe.svg'
    }
  ]
</script>

<section class="hero">
  <img class="shadow" src="/images/hero-shadow.svg" alt="shadow" aria-hidden/>

  <div class="text">
    <h1 class="text-gradient">
      Auth & Payment<br/>ready in <em>minutes</em>.
    </h1>
    <p>
      Build your SaaS faster. <b>AirBadge</b> connects <b>Auth.js</b> with <b>Stripe</b>. It's open source and free to self-host.
    </p>
  </div>

  <div class="buttons">
    <a class="btn primary start" href="https://docs.airbadge.dev/getting-started">
      <Icon icon="solar:rocket-bold" />
      <span>Get started</span>
    </a>

    <a class="btn docs" href="https://docs.airbadge.dev">
      <Icon icon="tabler:book" />
      <span>Documentation</span>
    </a>
  </div>

  <div class="logos">
    <h2>Built for</h2>

    <nav>
      {#each logos as logo}
        <a href={logo.url} title={logo.name}>
          <img src={logo.image} alt={logo.name}/>
        </a>
      {/each}
    </nav>
  </div>
</section>

<style lang="postcss">
  @import 'open-props/media.min.css';

  section {
    --heading-size: 2rem;
    --subhead-size: var(--font-size-1);
    --hero-margin: var(--size-11) var(--size-7) var(--size-7);
    --hero-gap: var(--size-7);
    --hero-height: auto;
    --text-gap: var(--size-5);

    @media (--sm-n-above) {
      --heading-size: 2.4rem;
      --subhead-size: var(--font-size-2);
      --hero-gap: var(--size-7);
    }

    @media (--md-n-above) {
      --heading-size: 3.4rem;
      --subhead-size: var(--font-size-3);
      --hero-margin: var(--size-11);
      --hero-gap: var(--size-8);
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--hero-margin);
    gap: var(--hero-gap);
    min-height: var(--hero-height);
  }

  .hero .shadow {
    z-index: -1;
    background: url(/images/hero-shadow.svg) center no-repeat;
    position: absolute;
    width: 100vw;
    height: 100%;
    overflow: visible;
    opacity: 0;
    animation: 0.7s fade-in 0.5s forwards;
    animation-timing-function: var(--ease-in-out-3);
  }

  .hero .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--text-gap);
  }

  .hero p {
    font-size: var(--subhead-size);
    font-weight: normal;
    letter-spacing: -0.03px;
    color: var(--gray-5);
    max-width: 45ch;
    text-align: center;
    opacity: 0;
    animation:
      var(--animation-fade-in) 0.3s forwards,
      var(--animation-slide-in-up) 0.3s forwards;

    & b {
      font-weight: 500;
      color: var(--gray-4);
    }
  }

  .hero .buttons {
    display: flex;
    gap: var(--size-4);
  }

  .hero .buttons a {
    opacity: 0;
  }

  .hero .start {
    animation:
      var(--animation-fade-in) 0.5s forwards,
      var(--animation-slide-in-up) 0.4s forwards;
  }

  .hero .docs {
    animation:
      var(--animation-fade-in) 0.5s forwards,
      var(--animation-slide-in-up) 0.5s forwards;
  }

  h1 {
    color: var(--gray-4);
    font-size: var(--heading-size);
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: var(--font-lineheight-0);
    text-align: center;
    text-wrap: pretty;
    max-width: 40ch;
    opacity: 0;
    animation:
      var(--animation-fade-in) 0.2s forwards,
      var(--animation-slide-in-up) 0.2s forwards;

    & em {
      -webkit-text-fill-color: var(--violet-4);
      color: var(--violet-4);
      font-style: normal;
      text-decoration-thickness: 5px;
      text-underline-offset: 5px;
    }
  }

  .logos {
    margin-top: 4rem;
    padding: var(--size-6);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: var(--size-3);
    opacity: 0;
    animation: 0.8s fade-in 1.1s forwards var(--ease-in-out-4);

    & h2 {
      font-size: var(--font-size-1);
      font-weight: 600;
      color: var(--gray-7);
    }
  }

  .logos nav {
    display: flex;
    flex-direction: row;
    gap: var(--size-8);

    & img {
      height: 40px;
      filter: grayscale(1) brightness(0.75) invert(1);
      transition: 0.2s all var(--ease-in-out-2);

      &:hover {
        filter: grayscale(0);
        scale: 1.05;
      }
    }
  }

  .btn {
    font-size: var(--font-size-1);
  }
</style>
