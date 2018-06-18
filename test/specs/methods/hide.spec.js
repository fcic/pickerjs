describe('hide (method)', () => {
  it('should hide the picker', (done) => {
    const input = window.createInput();
    const picker = new Picker(input, {
      shown() {
        expect(picker.shown).to.be.true;
        picker.hide();
        expect(picker.shown).to.be.false;
        done();
      },
    });

    picker.show();
  });
});
