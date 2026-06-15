CREATE MEMORY TABLE SAMPLE (
    ID VARCHAR(16) NOT NULL PRIMARY KEY,
    NAME VARCHAR(50),
    DESCRIPTION VARCHAR(100),
    USE_YN CHAR(1),
    REG_USER VARCHAR(10)
);

CREATE MEMORY TABLE IDS (
    TABLE_NAME VARCHAR(16) NOT NULL PRIMARY KEY,
    NEXT_ID DECIMAL(30) NOT NULL
);

SET SCHEMA PUBLIC;

INSERT INTO
    SAMPLE
VALUES
    (
        'SAMPLE-00001',
        'Runtime Environment',
        'Foundation Layer',
        'Y',
        'eGov'
    );

INSERT INTO
    SAMPLE
VALUES
    (
        'SAMPLE-00002',
        'Runtime Environment',
        'Persistence Layer',
        'Y',
        'eGov'
    );

INSERT INTO
    SAMPLE
VALUES
    (
        'SAMPLE-00003',
        'Runtime Environment',
        'Presentation Layer',
        'Y',
        'eGov'
    );

INSERT INTO
    IDS
VALUES
    ('SAMPLE', 115);

/* sample 이외에 내가 추가한 쿼리 */
-- 사원 테이블
CREATE MEMORY TABLE TBL_EMPLOYEES (
    EMP_ID VARCHAR(5) NOT NULL, -- 사원번호
    EMP_NAME VARCHAR(50), -- 성명
    DEPT_CODE VARCHAR(5), -- 부서코드
    POSITION VARCHAR(5), -- 직급
    HIRE_DATE VARCHAR(10), -- 입사일
    SALARY INT, -- 급여(연봉)
    GENDER VARCHAR(1), -- 성별
    MARRIED VARCHAR(10), -- 결혼여부
    SKILL VARCHAR(50), -- 보유기술
    HOBBY VARCHAR(50), -- 취미
    MEMO VARCHAR(1000) -- 비고사항
);

-- 부서 테이블
CREATE MEMORY TABLE TBL_DEPARTMENT (
    DEPT_CODE VARCHAR(5) NOT NULL, -- 부서코드
    DEPT_NAME VARCHAR(50), -- 부서명
    DEPT_EMP VARCHAR(50) -- 부서장
);

-- 코드 테이블 (공통코드)
CREATE MEMORY TABLE TBL_COMMON_CODE (
    MST_CODE VARCHAR(10) NOT NULL, -- 마스터 코드
    MST_NAME VARCHAR(50), -- 마스터 코드명
    DET_CODE VARCHAR(10), -- 디테일 코드
    DET_NAME VARCHAR(50), -- 디테일 코드명
    USE_FLAG VARCHAR(2) -- 사용 여부
);

-- insert
INSERT INTO
    TBL_EMPLOYEES
VALUES
    (
        'KR010',
        'Melon',
        '10',
        '10',
        '20071001',
        9000,
        'F',
        '0',
        '01,07',
        '01,05',
        'olive'
    );

INSERT INTO
    TBL_EMPLOYEES
VALUES
    (
        'US050',
        'Jackson',
        '20',
        '60',
        '20091021',
        6000,
        'M',
        '1',
        '11,03,13',
        '09,14',
        'lightpink'
    );

INSERT INTO
    TBL_DEPARTMENT
VALUES
    ('10', 'Accounting Team', 'Kate');

INSERT INTO
    TBL_DEPARTMENT
VALUES
    ('20', 'Finances Team', 'Dennis');

INSERT INTO
    TBL_COMMON_CODE
VALUES
    ('POSITION', 'Position Grade', '10', 'CEO', '1');

INSERT INTO
    TBL_COMMON_CODE
VALUES
    (
        'POSITION',
        'Position Grade',
        '20',
        'Director',
        '1'
    );

INSERT INTO
    TBL_COMMON_CODE
VALUES
    ('HOBBY', 'Hobby Code', '01', 'Climbing', '1');

INSERT INTO
    TBL_COMMON_CODE
VALUES
    ('HOBBY', 'Hobby Code', '02', 'Running', '1');