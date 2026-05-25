# 단어의 제왕 퀴즈

한국어 뜻을 보고 영어 단어를 한 글자씩 입력하는 단어 퀴즈 게임입니다.

- PDF, HWPX, DOCX, TXT, CSV, TSV 단어장 업로드
- 정답/오답 반응 이미지 표시
- 정답 입력 시 짧은 성공음 재생
- 전체 결과에서 `총 몇 개 중 몇 개 정답` 표시
- 틀린 문제만 모아 오답 퀴즈 재진행
- 서버 없이 브라우저에서만 실행

## 바로 사용하기

`index.html` 파일을 브라우저로 열면 바로 사용할 수 있습니다.

처음 화면은 비어 있습니다. `단어 파일 넣기` 버튼으로 PDF나 문서 파일을 넣으면 그 파일이 현재 단어장으로 적용됩니다.

GitHub Pages에 올리면 아래와 같은 주소로 사용할 수 있습니다.

```text
https://깃허브아이디.github.io/저장소이름/
```

## GitHub에 올리는 방법

1. GitHub에서 새 저장소를 만듭니다.
2. 이 `word-quiz-game` 폴더 안의 파일들을 저장소에 업로드합니다.
3. 저장소의 `Settings`로 이동합니다.
4. 왼쪽 메뉴에서 `Pages`를 엽니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch를 `main`, 폴더를 `/root`로 선택하고 저장합니다.
7. 잠시 기다린 뒤 표시되는 GitHub Pages 주소로 접속합니다.

## PDF 단어장 형식

PDF 안에 아래처럼 `Meaning / Word` 또는 `한국어 / 영어` 쌍이 표 형태로 들어 있으면 자동으로 읽습니다.

| Meaning | Word | Meaning | Word |
| --- | --- | --- | --- |
| 둥지 | nest | 세다 | count |
| 만나다 | meet | 굴 | burrow |

텍스트가 선택되는 PDF가 가장 잘 됩니다. 스캔 이미지 PDF는 브라우저만으로 글자를 읽기 어렵기 때문에 HWPX, DOCX, TSV 형식으로 넣는 것이 좋습니다.

## 다른 단어장 형식

표는 한국어와 영어가 한 쌍으로 들어가면 됩니다.

```text
한국어	영어
둥지	nest
세다	count
만나다	meet
```

한글 문서나 워드 문서에서는 표를 아래처럼 만들면 됩니다.

| 한국어 | 영어 |
| --- | --- |
| 둥지 | nest |
| 세다 | count |
| 만나다 | meet |

기존 한글 파일이 `.hwp`라면 한글 프로그램에서 `.hwpx`로 다시 저장한 뒤 넣어 주세요.

## 예시 단어장

`examples/wordbook-template.tsv` 파일을 내려받아 Excel이나 메모장으로 수정해서 사용할 수 있습니다.

## 저장 방식

앱에서 직접 수정한 단어장은 현재 브라우저의 저장공간에 저장됩니다. 다른 컴퓨터에서 쓰거나 오래 보관하려면 원본 단어장 파일을 따로 보관하는 것이 좋습니다.

## 파일 구성

```text
index.html
styles.css
app.js
manifest.webmanifest
assets/icon.svg
examples/wordbook-template.tsv
```
