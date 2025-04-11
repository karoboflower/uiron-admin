export default function () {
    return {
      rules: {
        'commit-rule': [2, 'always'],
      },
      plugins: [
        {
          rules: {
            'commit-rule': ({ header }) => {
              return [
                /(?:build|ci|docs|feat|fix|bug)\(\d{6,9}\).+/.test(header),
                `messages should be like fix(bugid): wch fix xxx bug`,
              ];
            },
          },
        },
      ],
    }
  }