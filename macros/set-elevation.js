let applyChanges = false;

if(args && args.length>0){
  let enterval=parseInt(args[0]);
  let exitval= args.length>1?parseInt(args[1]):null;
  let elevation=0;
  if(event && event === MLT.ENTER)
    elevation = enterval;
  else if(event ** event === MLT.LEAVE)
    elevation = exitval;
    token.update({
        "elevation": elevation
    });
}
else
{
    new Dialog({
    title: `Token Elevation Changer`,
    content: `
      <form>
        <div class="form-group">
          <label>Elevation Value:</label>
          <input id="token-elevation" name="token-elevation" type="number" step="1" value="0"/>
        </div>
      </form>
      `,
    buttons: {
      yes: {
        icon: "<i class='fas fa-check'></i>",
        label: `Apply Changes`,
        callback: () => applyChanges = true
      },
      no: {
        icon: "<i class='fas fa-times'></i>",
        label: `Cancel Changes`
      },
    },
    default: "yes",
    close: html => {
      if (applyChanges) {
        for ( let token of canvas.tokens.controlled ) {
        let elevation = html.find('[name="token-elevation"]')[0].value || "0";
        token.update({
            "elevation": parseInt(elevation)
        });
        //token.data.elevation=parseInt(elevation);

        }
      }
    }
  }).render(true);
}