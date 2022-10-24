<SideMenu open={slideMenuOpen} on:close={(event) => slideMenuOpen=event.detail.open } />
<TopAppBar
  variant="static"
  {prominent}
  {dense}
  color={secondaryColor ? 'secondary' : 'primary'}
>
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => slideMenuOpen = !slideMenuOpen}>menu</IconButton>
      <Logo />
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>
<slot></slot>
 
<script lang="ts">
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';
  import SideMenu from "../SideMenu/index.svelte";
  import Logo from "../../01_atoms/Logo/index.svelte";

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
  let slideMenuOpen = false;
 
</script>
 
<style>

</style>