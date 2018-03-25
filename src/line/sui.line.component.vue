<template>
    <div class='sui-line'>
            <fieldset class='sui-line-context'>
                <legend class='sui-line-context-text'>{{title}}</legend>
            </fieldset>
    </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style>
.sui-line {
  padding: 0px;
  margin: 0px;
}

.sui-line-context {
  margin: 0px 0 0px;
  border: none;
  border-top: 1px solid #e2e2e2;
}

.sui-line-context-text {
  margin-left: 20px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: 300;
}
</style>