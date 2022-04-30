import sample from '..'

test('sample', () => {
  const response = sample()

  expect(response).toBe("sample package");
});
